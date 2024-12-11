/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'light-mode': "url('/img/hero-pattern.svg')",
        'night-mode': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
