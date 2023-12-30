// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    token: '',
    redis: {
      host: '',
      password: '',
      port: 0,
    },
    turso: {
      url: '',
      authToken: '',
    }
  },
  routeRules: {
    '/github/**': { cors: true },
  },

  devServer: {
    port: 3000,
  },
})
