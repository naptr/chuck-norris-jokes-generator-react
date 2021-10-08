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
        'body-custom': ['"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system']
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      appearance: ['active']
    },
  },
  plugins: [],
}
