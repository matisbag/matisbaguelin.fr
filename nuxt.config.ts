// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  content: {
    highlight: {
      theme: "github-dark",
    },
  },

  sitemap: {
    sources: ["/api/sitemap"],
  },

  robots: {
    sitemap: "/sitemap.xml",
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  compatibilityDate: "2024-08-19",
})
