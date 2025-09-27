/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ab1d2',
        accent: '#f18f38',
      }
    },
  },
  plugins: [],
}