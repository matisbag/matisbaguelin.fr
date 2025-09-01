import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/content', '@nuxt/image', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],

  content: {
    experimental: { nativeSqlite: true },
  },

  alias: {
    'styled-system': resolve('./styled-system'),
  },
  compatibilityDate: '2025-07-15',

  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    },
  },
})
