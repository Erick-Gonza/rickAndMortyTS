/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#202329',
        secondary: '#F5F5F5',
      },
      fontFamily: {
        asap: ['Asap', 'sans-serif'],
      },
    },
    plugins: [],
  },
}
