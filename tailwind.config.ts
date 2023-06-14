import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindForms from "@tailwindcss/forms";
import tailwindTypography from "@tailwindcss/typography";

// Add your custom theme colors here
const themeColors = {
  primary: colors.teal,
  secondary: colors.gray,
  success: colors.emerald,
  warning: colors.amber,
  danger: colors.rose,
  info: colors.indigo,
  dark: colors.slate,
};

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,css}"],
  darkMode: "class", // or 'false' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        width: "width",
        height: "height",
        margin: "margin",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 250ms ease-in-out",
      },
      colors: themeColors,
      variables: {
        DEFAULT: themeColors,
      },
      borderRadius: {
        primary: "0.4rem",
      },
    },
  },
  plugins: [tailwindForms, tailwindTypography],
} satisfies Config;
