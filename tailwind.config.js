/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
              'neutral': {
                100: '#f5f5f5',
                600: '#525252'
              }
      },
  }
},
plugins: [
    require('flowbite/plugin')
]
}