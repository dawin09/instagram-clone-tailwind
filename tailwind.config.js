module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': '.70rem'
      },
      width: {
        'inherit': 'inherit'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '995px',
    }
  },
  variants: {
    extend: {
        textAlign: ['focus'],
        margin: ['first', 'last'],
        overflow: ['last'],
        opacity: ['active'],
    },
  },
  plugins: [],
}
