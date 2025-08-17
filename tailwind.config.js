/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        neutral: {
          100: '#f5f5f5',
          600: '#525252',
        },
      },
    },
  },
  plugins: [],
}
