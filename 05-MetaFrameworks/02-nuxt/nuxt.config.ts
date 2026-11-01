// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001/api',
      picturesBase: 'http://localhost:3001',
    },
  },
  image: {
    domains: ['localhost:3001'],
  },
  routeRules: {
    '/': { swr: 60 },
    '/houses/**': { swr: 60 },
  },
})
