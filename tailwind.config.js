const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["sm"],
    },
    {
      pattern: /to-(dark-green|dark-pink|dark-blue)/,
      variants: ["hover"],
    },
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        green: colors.emerald,
        "dark-green": "#011c15",
        "dark-pink": "#260713",
        "dark-blue": "#0f0d26",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
