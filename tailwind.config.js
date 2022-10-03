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
  theme: {
    screens: {
      'xs': '375px',
      // => @media (min-width: 375px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
};
