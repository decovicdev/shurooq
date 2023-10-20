import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./error.vue",
    "./app.vue",
  ],

  theme: {
    extend: {
      fontSize: {
        ss: "13px",
      },
      colors: {
        gray: {
          darker: "#1A1A1A",
          dark: "#232323",
          light: "#5F6062",
          lighter: "#919195",
        },
        primary: {
          base: "#F89828",
          light: "#FDBB30",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
