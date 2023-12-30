import { Octokit } from "octokit";
import { responceZod } from "~/server/models/core";
import tursoLayer from "~/server/utils/sql";

export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, "username");
  const repo = getRouterParam(event, "reponame");
  const branch = getRouterParam(event, "branch");

  if (!username || !repo || !branch) {
    return {
      status: 400,
      body: {
        message: "Bad request. Username, repo, and branch are required.",
      },
    };
  }

  const token = event.node.req.headers.authorization

  if (!token) {
    return {
      status: 401,
      body: {
        message: "Unauthorized"
      }
    }
  }

  const octokit = new Octokit({
    auth: token,
  });

  if (!octokit) {
    return {
      status: 400,
      body: {
        message: "Octokit not initialized.",
      },
    };
  }

  const userInfo = await userDetails(token);

  const getCache = await useStorage("redis").getItem(
    `${userInfo.gname}${repo}${branch}`
  );

  if (getCache !== null && getCache !== undefined) {
    return {
      body: getCache,
    };
  }

  const response = await octokit.request(
    `GET /repos/${username}/${repo}/git/trees/${branch}?recursive=1`
  );

  if (response.status !== 200) {
    return {
      status: response.status,
      body: {
        message: "Unable to fetch data from GitHub.",
      },
    };
  }

  const zodData = responceZod.parse(await response.data);

  if (!zodData || !zodData.tree || zodData.tree.length === 0) {
    return {
      status: 400,
      body: {
        message: "No files found in the GitHub repository.",
      },
    };
  }

  const fileStructure = createFileStructure(
    zodData.tree
      .map((item) => item.path)
      .filter((path) => path !== null) as string[]
  );

  const repoType = await getRepoInfo(token, username, repo)

  const returnData = {
    id: getCurrentDateTime(),
    userName: userInfo.gname,
    repoName: repo,
    branchName: branch,
    data: convertToJSON(fileStructure),
    isPrivate: repoType
  };

  // Storing data in the database
  const databaseInsertResult = tursoLayer().insertData(returnData);

  if (databaseInsertResult instanceof Promise) {
    // Handle the database insertion promise
    await databaseInsertResult.catch((error) => {
      console.error("Database insertion error:", error);
    });
  }

  // Storing data in Redis cache
  try {
    await useStorage("redis").setItem(
      `${userInfo.gname}${repo}${branch}`,
      returnData,
      {
        ttl: 60,
      }
    );
  } catch (error) {
    // Handle Redis set error
    console.error("Redis set error:", error);

    return {
      status: 500,
      body: {
        message:
          "Internal server error occurred while storing data in Redis cache.",
      },
    };
  }

  // Both operations were successful, return the response
  return {
    status: response.status,
    body: returnData,
  };
});
