export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
}
