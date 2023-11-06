/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
    colors: {
      'bg': '#18191A',
      'card' : '#242526',
      'hover' : '#3A3B3C',
      'primary' : '#E4E6EB',
      'secondary': '#B0B3B8',
      'transparent': 'transparent'
      
      
    },
  },
  plugins: [],
})