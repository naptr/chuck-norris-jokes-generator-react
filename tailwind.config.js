module.exports = {
  purge: ['*.html', './src/**/*/*.jsx', './src/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '411': '411px',
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
