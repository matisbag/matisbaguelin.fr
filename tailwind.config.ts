import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import typography from "@tailwindcss/typography"

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    container: {
      center: true,
      screens: {
        xl: "1180px",
      },
    },
    extend: {
      maxWidth: {
        container: "1280px",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      dropShadow: {
        white: [
          "0 1px 2px rgb(255 255 255 / 0.1)",
          "0 1px 1px rgb(255 255 255 / 0.06)",
        ],
      },
    },
  },
  plugins: [typography],
} satisfies Config
