import { ofetch } from "ofetch";
import { anonymousSchema } from "~/server/models/core";


export default defineEventHandler(async (event) => {

    const owner = getRouterParam(event, 'username')
    const repo = getRouterParam(event, 'reponame')
    const branch = getRouterParam(event, 'abranch')

    const aRespose = await ofetch(`/repos/${owner}/${repo}/files/${branch}`, {
        baseURL: "https://ungh.cc",
        cache: "no-cache",
        retry: 2,
        retryDelay: 200,
    });

    const zodData = anonymousSchema.parse(aRespose);

    const fileStructure = createFileStructure(zodData.files
        .map((item) => item.path)
        .filter((path) => path !== null) as string[]);

    return {
        status: aRespose.status,
        body: convertToJSON(fileStructure)
    };

});
