/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '85': '85%',
      },
      colors: {
        'primary': '#ca8a04',
        'secondary': '#272727',
        'terciary': '#18181b'
      }
    },
  },
  plugins: [],
}

