// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  runtimeConfig: {
    private: {
      CONTENTFUL_SPACE_ID: process.env.CTF_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
    },
  },
  css: [
    "~/assets/css/main.scss"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
