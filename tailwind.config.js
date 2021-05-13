const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './safelist.txt',
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    // options: {
    //   safelist: [/^sm:grid-cols-/],
    // }
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        green: colors.emerald,
        'dark-green': '#011c15',
        'dark-pink' : '#260713',
        'dark-blue' : '#0f0d26'
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
 }
