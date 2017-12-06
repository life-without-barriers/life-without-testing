const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer({
  presets: ['es2015', 'flow'],
  plugins: ['transform-object-rest-spread', 'transform-async-to-generator']
})
