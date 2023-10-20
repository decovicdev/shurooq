import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      htmlAttrs: {
        lang: "ar",
      },
    },
  },
  pwa: {
    /* your pwa options */
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
