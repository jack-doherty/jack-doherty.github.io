
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {extend: {},},
  daisyui: {
    themes: ["corporate"]
  },
  plugins: [require('daisyui')],
  }