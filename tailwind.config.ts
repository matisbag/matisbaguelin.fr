import type { Config } from "tailwindcss"
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
    container: {
      center: true,
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [typography],
} satisfies Config
