/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008fbb',
        'secondary': '#9a2783'
      },
      backgroundImage: {
        'auth-side': "url('./assets/auth-bg.jpg')"
      }
    },
  },
  plugins: [],
});