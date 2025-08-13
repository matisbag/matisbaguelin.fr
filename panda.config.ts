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
      tokens: {
        fonts: {
          heading: { value: ['Space Grotesk', 'sans-serif'] },
        },
      },
      semanticTokens: {
        colors: {
          primary: { value: { base: '{colors.blue.500}', _dark: '{colors.blue.400}' } },
          bg: {
            DEFAULT: { value: { base: '{colors.white}', _dark: '{colors.gray.900}' } },
          },
          text: {
            DEFAULT: { value: { base: '{colors.gray.700}', _dark: '{colors.gray.200}' } },
            toned: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.300}' } },
            muted: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.400}' } },
          },
        },
      },
    },
  },

  patterns: {
    extend: {
      container: {
        defaultValues: {
          width: '100%',
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
