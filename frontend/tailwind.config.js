/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sorange: "hsl(var(--color-sorange) / <alpha-value>",
        sred: "hsl(var(--color-sred) / <alpha-value>",
        owhite: "hsl(var(--color-owhite) / <alpha-value>",
        gblue: "hsl(var(--color-gblue) / <alpha-value>",
        dgblue: "hsl(var(--color-dgblue) / <alpha-value>",
        vdblue: "hsl(var(--color-vdblue) / <alpha-value>",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
