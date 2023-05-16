// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {

    },
  },
  modules: [
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@nuxtjs/strapi',
    '@unocss/nuxt',
  ],
  imports: {
    autoImport: true,
  },
  strapi: {
    devtools: true,
    url: 'http://localhost:1337',
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    // core options
    shortcuts: [],
    rules: [],
    safelist: [],
  },
  pwa: {},
  image: {},
  i18n: {},
  content: {},
  // devtools: {},
})
