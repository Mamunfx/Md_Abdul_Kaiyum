/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary:"#1D4ED8",
      }
    },
  },
  plugins: [require('daisyui'),],
}

