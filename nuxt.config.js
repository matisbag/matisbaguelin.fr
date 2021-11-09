const data = require('./data/data.json')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // https://fr.nuxtjs.org/docs/2.x/features/deployment-targets/
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio - Matis Baguelin',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio de Matis Baguelin, Etudiant et développeur full-stack (Vue.js - Laravel) à Paris.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Portfolio - Matis Baguelin' },
      { property: 'og:description', content: 'Portfolio de Matis Baguelin, Etudiant et développeur full-stack (Vue.js - Laravel) à Paris.' },
      { property: 'og:image', content: '/prev.png' }, // IMG
      { property: 'og:image:alt', content: 'Portfolio, Matis Baguelin' },
      { property: 'twitter:title', content: 'Portfolio - Matis Baguelin' },
      { property: 'twitter:description', content: 'Portfolio de Matis Baguelin, Etudiant et développeur full-stack (Vue.js - Laravel) à Paris.' },
      { property: 'twitter:image', content: '/prev.png' }, // IMG
      { property: 'twitter:image:alt', content: 'Portfolio, Matis Baguelin' },
      { property: 'author', content: 'Matis Baguelin'},
      { property: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/mb.svg' },
      { rel: 'apple-touch-icon', href: '/prev.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://axios.nuxtjs.org/setup
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },

  // https://tailwindcss.nuxtjs.org/setup/
  tailwindcss: {
    jit: true
  },

  // https://sitemap.nuxtjs.org/fr/guide/configuration
  sitemap: {
    routes: async () => {
      return data.projects.map(v => `/projects/${v.routeName}`)
    }
  },

  // https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: '*',
    Disallow: ''
  }
}
