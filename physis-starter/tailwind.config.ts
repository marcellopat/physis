import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          50:  "#f6f7f1",
          100: "#e6ead7",
          200: "#cbd7ab",
          300: "#afc480",
          400: "#93b055",
          500: "#7a973c",
          600: "#5e762e",
          700: "#485b24",
          800: "#34411a",
          900: "#202810"
        },
        terracotta: {
          50:  "#fdf6f2",
          100: "#f7e2d7",
          200: "#efc0ad",
          300: "#e29a80",
          400: "#d06f4e",
          500: "#ba5637",
          600: "#94442c",
          700: "#6e3321",
          800: "#472216",
          900: "#28140c"
        }
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Cormorant Garamond", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
export default config;
