import { Octokit } from "octokit";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, "username");
  const repo = getRouterParam(event, "reponame");

  if (!username || !repo) {
    return {
      status: 400,
      body: {
        message: "Bad request. Username, repo, and branch are required.",
      },
    };
  }

  const token = event.node.req.headers.authorization;

  if (!token) {
    return {
      status: 401,
      body: {
        message: "Unauthorized",
      },
    };
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

  const defaultBranchesResponse = await fetch(
    `https://api.github.com/repos/${username}/${repo}`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );

  const branchesResponse = await fetch(
    `https://api.github.com/repos/${username}/${repo}/branches`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );

  if (!defaultBranchesResponse.ok) {
    return {
      status: 400,
      error: defaultBranchesResponse,
      body: {
        message: "Failed to fetch default branches.",
      },
    };
  }

  if (!branchesResponse.ok) {
    return {
      status: 400,
      body: {
        message: "Failed to fetch branches.",
      },
    };
  }

  const defaultBranche = await defaultBranchesResponse.json();
  const branches = await branchesResponse.json();

  const repositorySchema = z.object({
    name: z.string(),
    protected: z.boolean(),
  });

  const branch = z.array(repositorySchema);

  const allBranches = branch.parse(branches);

  return {
    defaultBranch: defaultBranche.default_branch,
    branches: allBranches.map((branch) => branch.name),
    ownerName: username,
    repoName: repo,
  };
});
