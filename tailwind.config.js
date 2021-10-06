module.exports = {
  purge: ['./index.html', './src/**/*/*.{vue, js, jsx, tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '667': '667px'
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
