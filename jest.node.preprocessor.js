const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer({
  presets: [['env', {
    'targets': {
      'node': '6.10'
    }
  }], 'flow'],
  plugins: ['transform-object-rest-spread']
})
