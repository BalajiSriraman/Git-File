type repoDetails = {
    userName: string;
    repoName: string;
};

export function parseRepo(input: string): repoDetails {
    const parts = input.split('/');

    const userName = parts[parts.length - 2];
    const repoName = parts[parts.length - 1];

    return { userName, repoName };
}
