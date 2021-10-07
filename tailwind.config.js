module.exports = {
  purge: ['./index.html', './src/**/*/*.{vue, js, jsx, tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '411': '411px',
        '667': '667px',
        '731': '731px'
      },
      fontFamily: {
        'chuck-norris': ['Rye', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
