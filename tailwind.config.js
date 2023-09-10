/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: {
          light: '#E7E9FO',
          base: '#eeeeee',
          dark: '#1f2028',
        },
        customGreen: {
          light: '#CCFD7F',
          base: '#CCFD7F',
          dark: '#DFFE48',
        },
        customBlue: {
          light: '#1E90FF',
          base: '#081F62',
          dark: '#051747',
        }
      },
    },
  },
  darkMode: 'class',
};
