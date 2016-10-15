const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    app: './frontend/app'
  },
  output: {
    path: './public/dist',
    filename: '[name]-[hash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new ManifestPlugin()
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015',"stage-2"]
        }
      }
    ]
  }
};
