/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001F3F',
          light: '#002b57',
          dark: '#001529',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#ffe033',
          dark: '#ccac00',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};