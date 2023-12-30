export default defineEventHandler(async (event) => {


    const username = `BalajiSriraman`
    const hashedToken = `token`

    // const data = await useStorage().setItem(username, {
    //     hashedToken
    // })


    const des = await useStorage('redis').setItem('foo', { hello: 'world' })
    const les = await useStorage('redis').getItem('foo')


    return {
        les, des,
    }
})  