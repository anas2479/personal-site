module.exports = {
  mode:'jit',
  purge: [
    './src/**/*.svelte',
    './src/**/*.js',
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'body':['"EB Garamond"'],
      'headings':['Caveat']
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
