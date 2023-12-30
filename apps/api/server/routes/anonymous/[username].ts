export default defineEventHandler(async (event) => {
    const username = getRouterParam(event, 'username')
    return `Hey ${username}! Soon this route will return the details of the you :) `
})