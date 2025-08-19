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
          primary: { value: { base: '{colors.sky.600}', _dark: '{colors.sky.500}' } },
          secondary: { value: { base: '{colors.fuchsia.600}', _dark: '{colors.fuchsia.500}' } },
          bg: {
            DEFAULT: { value: { base: '{colors.white}', _dark: '{colors.gray.950}' } },
            muted: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.900}' } },
            elevated: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' } },
            accented: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' } },
            inverted: { value: { base: '{colors.gray.900}', _dark: '{colors.white}' } },
          },
          text: {
            DEFAULT: { value: { base: '{colors.gray.800}', _dark: '{colors.gray.200}' } },
            toned: { value: { base: '{colors.gray.700}', _dark: '{colors.gray.300}' } },
            muted: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' } },
          },
          border: {
            DEFAULT: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' } },
            accented: { value: { base: '{colors.gray.300}', _dark: '{colors.gray.600}' } },
            inverted: { value: { base: '{colors.gray.800}', _dark: '{colors.white}' } },
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
      prose: {
        description: 'A pattern for prose typography similar to Tailwind Typography',
        properties: {
          size: { type: 'enum', value: ['sm', 'base', 'lg', 'xl'] },
        },
        defaultValues: {
          size: 'lg',
        },
        transform: props => ({
          '& h1': {
            fontSize: props.size === 'xl' ? '2.25rem' : props.size === 'lg' ? '2rem' : props.size === 'sm' ? '1.75rem' : '1.875rem',
            fontWeight: '800',
            lineHeight: '1.2',
            marginTop: '0',
            marginBottom: '0.875em',
          },
          '& h2': {
            'fontSize': props.size === 'xl' ? '1.875rem' : props.size === 'lg' ? '1.75rem' : props.size === 'sm' ? '1.5rem' : '1.5rem',
            'fontWeight': '700',
            'lineHeight': '1.3',
            'marginTop': '2em',
            'marginBottom': '1em',
            '& a': {
              'color': 'inherit',
              'textDecoration': 'none',
              '&:hover': {
                textDecoration: 'none',
                textDecorationThickness: 'unset',
              },
            },
          },
          '& h3': {
            'fontSize': props.size === 'xl' ? '1.5rem' : props.size === 'lg' ? '1.375rem' : props.size === 'sm' ? '1.25rem' : '1.25rem',
            'fontWeight': '600',
            'lineHeight': '1.4',
            'marginTop': '1.6em',
            'marginBottom': '0.6em',
            '& a': {
              'color': 'inherit',
              'textDecoration': 'none',
              '&:hover': {
                textDecoration: 'none',
                textDecorationThickness: 'unset',
              },
            },
          },
          '& p': {
            marginTop: '1.25em',
            marginBottom: '1.25em',
            lineHeight: '1.7',
          },
          '& a': {
            'textDecoration': 'underline',
            'textDecorationColor': 'primary',
            'textUnderlineOffset': '2px',
            'fontWeight': '500',
            '&:hover': {
              textDecorationThickness: '2px',
            },
          },
          '& strong': {
            fontWeight: '600',
          },
          '& ul': {
            marginTop: '1.25em',
            marginBottom: '1.25em',
            paddingLeft: '1.625em',
            listStyleType: 'disc',
          },
          '& ol': {
            marginTop: '1.25em',
            marginBottom: '1.25em',
            paddingLeft: '1.625em',
            listStyleType: 'decimal',
          },
          '& li': {
            marginTop: '0.5em',
            marginBottom: '0.5em',
            lineHeight: '1.7',
          },
          '& blockquote': {
            fontWeight: '500',
            fontStyle: 'italic',
            borderLeftWidth: '0.25rem',
            borderLeftColor: 'border.accented',
            marginTop: '1.6em',
            marginBottom: '1.6em',
            paddingLeft: '1em',
          },
          '& hr': {
            borderColor: 'border',
            borderTopWidth: '1px',
            marginTop: '3em',
            marginBottom: '3em',
          },
          '& img': {
            marginTop: '2em',
            marginBottom: '2em',
            borderRadius: '0.5rem',
          },
          '& figure': {
            marginTop: '2em',
            marginBottom: '2em',
          },
        }),
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
