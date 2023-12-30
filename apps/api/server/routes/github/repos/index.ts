
import { Octokit } from "octokit";
import { repoSchema } from "~/server/models/core";

export default defineEventHandler(async (event) => {

  const token = event.node.req.headers.authorization

  if (!token) {
    return {
      status: 401,
      body: {
        message: "Unauthorized"
      }
    }
  }

  // issue find a better way to get username
  const octokit = new Octokit({
    auth: token,
  })
  // duplicate reqs 
  const username = await userDetails(token)

  // get public repos
  const public_response = await octokit.request(`GET /users/${username.gname}/repos?per_page=100`).then((response) => {
    return repoSchema.parse(response.data)
  }).catch((error) => {
    throw new Error(error.message)
  })

  // get repos with private visibility and owned by the user
  const private_response = await octokit.request(`GET /user/repos?per_page=100&page=1&visibility=private&affiliation=owner`).then((response) => {
    return repoSchema.parse(response.data)
  }).catch((error) => {
    throw new Error(error.message)
  })

  const userInfo = await userDetails(useRuntimeConfig().token)


  return {
    userInfo,
    repos: [...public_response, ...private_response]
  }

});
