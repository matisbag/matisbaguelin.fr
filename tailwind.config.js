const colors = require('tailwindcss/colors');
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        'dark-green': '#011c15',
        'dark-pink' : '#260713',
        'dark-blue' : '#0f0d26'
      },
    },
  },
  variants: {
    extend: {
      margin: ['group-hover'],
      opacity: ['group-hover'],
      scale: ['group-hover']
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
