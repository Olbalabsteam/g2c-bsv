const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin');
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
  //entry: "./index.js",// path.join(__dirname, '/index.js'),
  // externals: {
  //   crypto: 'crypto'
  // },
  output: {
    library: 'bsv',
    path: path.join(__dirname, '/'),
    filename: 'bsv.min.js'
  },
  optimization: {
    innerGraph: false, // THIS BREAKS COMPILED CODE IF SET TO 'true'
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //want comments inline
        terserOptions: {
          compress: { defaults: false },
          // mangle: true,
        }
      })],
  },
  mode: 'production'
}
