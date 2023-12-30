import { Octokit } from "octokit";

export async function getRepoInfo(token: string, owner: string, repo: string) {

    const octokit = new Octokit({
        auth: token,
    })

    const { data: { private: isPrivate } } = await octokit.request(`GET /repos/${owner}/${repo}`)

    return isPrivate
}
