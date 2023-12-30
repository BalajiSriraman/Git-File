import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
    const storage = useStorage()

    // Dynamically pass in credentials from runtime configuration, or other sources
    const driver = redisDriver({
        host: useRuntimeConfig().redis.host,
        port: useRuntimeConfig().redis.port,
        password: useRuntimeConfig().redis.password,
        /* other redis connector options */
    })

    // Mount driver
    storage.mount('redis', driver)
})
