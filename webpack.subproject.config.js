const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

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
  mode: 'production'
}
