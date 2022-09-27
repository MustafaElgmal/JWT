/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { colors: {
      'warm-gray': colors.warmGray,
      teal: colors.teal,
    }},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
};
