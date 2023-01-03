/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#6C00FF',
      'secondary': '#6C00F',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'secondary': ['Nunito', 'sans-serif'],
    },
  },

   
  
  plugins: [require('flowbite/plugin')],
}