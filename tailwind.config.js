const colors = require('tailwindcss/colors');
module.exports = {
  purge: [
    {
      enabled: true,
    },
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: "media", // or 'media' or 'class'
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
      scale: ['group-hover'],
      borderRadius: ['hover'],
      display: ['dark']
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
