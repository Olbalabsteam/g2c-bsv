const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
var path = require('path')

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      // Make a global `process` variable that points to the `process` package,
      // because the `util` package expects there to be a global variable named `process`.
      process: 'process/browser'
    }),
    new NodePolyfillPlugin()
  ],
  externals: {
    '../../': 'bsv'
  },
  output: {
    library: 'bsvMessage',
    path: path.join(__dirname, '/'),
    filename: 'bsv-message.min.js'
  },
  mode: 'production'
}
