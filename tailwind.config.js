/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: {
          light: '#f2f3fa',
          base: '#eeeeee',
          dark: '#1f2028',
        },
        customSecondary:'#FFDD79',
      },
    },
  },
  darkMode: 'class',
};
