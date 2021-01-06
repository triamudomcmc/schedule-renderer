const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBMPlexThai', ...defaultTheme.fontFamily.sans],
      display: [
        'IBMPlexThai',
        'Kanit',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
