import { Octokit } from "octokit";

export async function userDetails(token: string) {

    const octokit = new Octokit({
        auth: token,
    })

    const {
        data: { name, avatar_url, login },
    } = await octokit.rest.users.getAuthenticated();


    return {
        oname: name,
        avatar_url,
        gname: login
    }
}

