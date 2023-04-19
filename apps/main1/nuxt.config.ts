// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/eslint-module",
    "@nuxt/image-edge",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt",
    "@nuxtjs/strapi",
    "@unocss/nuxt",
  ],
  strapi: {},
  unocss: {},
  pwa: {},
  eslint: {},
  image: {},
  i18n: {},
  content: {},
  devtools: {},
});