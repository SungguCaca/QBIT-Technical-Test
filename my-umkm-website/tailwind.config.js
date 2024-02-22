/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#EAFFE0',
        secondary: '#209153',
        height: {
          '128': '37rem',
        }
      },
    },
  },
  plugins: [],
}