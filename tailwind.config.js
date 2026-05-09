/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      /**
       * Design tokens live here (single source of truth).
       * Token values will be imported/ported later; keep these objects as the expected shape.
       */
      colors: {},
      fontFamily: {},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {},
    },
  },
  plugins: [],
};
