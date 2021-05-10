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
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Portfolio - Matis Baguelin' },
      { hid: 'og:description', name: 'og:description', content: 'Portfolio de Matis Baguelin, Etudiant et développeur full-stack (Vue.js - Laravel) à Paris.' },
      { hid: 'og:image', name: 'og:image', content: '/mb.png' }, // IMG
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'Portfolio, Matis Baguelin' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Portfolio - Matis Baguelin' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Portfolio de Matis Baguelin, Etudiant et développeur full-stack (Vue.js - Laravel) à Paris.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/mb.png' }, // IMG
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Portfolio, Matis Baguelin' },
      { name: 'author', content: 'Matis Baguelin'},
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
      // icon for light mode
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/mb.png' }
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
    '@nuxtjs/axios'
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
  }
}
