// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio'],

  routeRules: {
    '/': { prerender: true }
  },

  studio: {
    enabled: true
  },

  content: {
    navigation: {
      fields: ['author', 'publishedAt']
    }
  },

  compatibilityDate: '2024-08-01'
})