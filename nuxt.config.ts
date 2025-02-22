import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },
  typescript: {
    typeCheck: true,
  },
  head: {
    title: "つながるTIMER",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  publicRuntimeConfig: {
    firebase: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
  buildModules: ["@nuxtjs/pwa"],
  css: ["~/assets/css/tailwind.css"],
  pwa: {
    manifest: {
      useWebmanifestExtension: true,
    },
  },
  meta: {
    mobileAppIOS: false,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ["@headlessui/vue"],
  },
});
