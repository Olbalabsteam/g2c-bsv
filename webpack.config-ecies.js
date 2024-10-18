
const webpack = require("webpack");
var path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  /*devServer: {
    compress: true,
    port: '1234',
    allowedHosts: [
        'api.telepow.ddns.me','localhost'
    ]

 }  ,*/
  plugins: [
    new NodePolyfillPlugin(),
  new webpack.ProvidePlugin({
    // Make a global `process` variable that points to the `process` package,
    // because the `util` package expects there to be a global variable named `process`.
    // Thanks to https://stackoverflow.com/a/65018686/14239942
    process: 'process/browser'
  }),
  ],
  resolve:
  {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "vm": require.resolve("vm-browserify"),
      "crypto": require.resolve("crypto-browserify"),
    }
  },
  entry: path.join(__dirname, '/lib/ecies/electrum-ecies.js'),
  // externals: {
  //   crypto: 'crypto'
  // },
  //experiments: { outputModule: true },
  //externalsType: "commonjs",
  output: {
    library: 'bsvEcies',
    path: path.join(__dirname, '/'),
    filename: 'bsv-ecies.min.js'
  },
  mode: 'production',
  optimization: {
   avoidEntryIife: false,
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false, //want comments inline
    })],
  },
}
