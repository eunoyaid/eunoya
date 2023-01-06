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
      'primary': '#ED931E',
      'secondary': '#6C00F',
      'card': '#FFF3E5',
      'header': '#3C3C3C',
      'background': '#FCFEFE',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'secondary': ['Nunito', 'sans-serif'],
     
    },
  },

   
  
  plugins: [require('flowbite/plugin')],
}