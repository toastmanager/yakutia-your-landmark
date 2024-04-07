/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'winter-blue': '#C3ECE9',
        'winter-cian': '#008080',
        'winter-purple': '#583E7B',
        'winter-light-purple': '#D5C3EC',
      }
    },
  },
  plugins: [],
}

