// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    "@bootstrap-vue-next/nuxt",
    "@primevue/nuxt-module",
  ],
  css: ["~/assets/sass/styles.scss"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".app-dark",
        },
      },
    },
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
  i18n: {
    langDir: "lang",

    defaultLocale: "zh-CN",
    strategy: "prefix_and_default",

    locales: [
      {
        code: "zh-CN",
        iso: "zh-CN",
        file: "zh-CN.json",
        name: "简体中文",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        name: "English",
      },
    ],
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
