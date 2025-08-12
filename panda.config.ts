import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/app.vue', './app/components/**/*.{js,jsx,ts,tsx,vue}', './app/pages/**/*.{js,jsx,ts,tsx,vue}'],

  // Files to exclude
  exclude: [],

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: { value: { base: '{colors.blue.500}', _dark: '{colors.blue.400}' } },
          bg: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.900}' } },
          text: { value: { base: '{colors.gray.800}', _dark: '{colors.gray.200}' } },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
