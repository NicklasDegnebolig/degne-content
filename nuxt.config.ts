import OpenProps from 'open-props';
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
    },
    
  },

  postcss: {
    plugins: {
      'postcss-jit-props': OpenProps,
    },
  },

  compatibilityDate: '2024-08-01'
})