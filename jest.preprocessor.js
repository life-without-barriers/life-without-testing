const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer({
  presets: ['flow', 'es2015', 'react'],
  plugins: ['transform-object-rest-spread', 'transform-async-to-generator']
})
