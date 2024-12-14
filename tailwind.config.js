/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'light-mode': "url('/img/hero-pattern.svg')",
        'night-mode': "url('/img/footer-texture.png')",
      },
      aspectRatio: {
        'portrait': '3 / 4'
      }
    },
  },
  plugins: [],
});
