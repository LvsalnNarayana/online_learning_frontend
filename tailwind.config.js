/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
  },
};
export const plugins = [];
