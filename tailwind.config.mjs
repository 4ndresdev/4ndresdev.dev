/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "4rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "800px",
        xl: "800px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
