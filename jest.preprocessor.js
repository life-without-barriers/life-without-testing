const babelJest = require('babel-jest')

module.exports = () => {
  return babelJest.createTransformer({
    presets: ['es2015', 'react'],
    plugins: ['transform-object-rest-spread']
  })
}
