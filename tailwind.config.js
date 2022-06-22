/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#A877D3",
        secondary: "#D1CBD5",
        gray: "#D1CBD5",
        graydark: "#C2B5DE",
        note: "#90779B"
      },
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold'],
        'gilroy-medium': ['Gilroy-Medium'],
        'gilroy-semibold': ['Gilroy-Semibold'],
        'neuemach-bold': ['NeueMachina-Bold'],
        'neuemach-ultrbold': ['NeueMachina-Ultrabold']
      }
    },
  },
  plugins: [],
}
