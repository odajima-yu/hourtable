const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './frontend/app'
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:4000/',
    hot: true
  },
  module: {
    loaders: [
      {
        loaders: ['react-hot-loader/webpack', 'babel?cacheDirectory=true,presets[]=es2015,presets[]=stage-2,presets[]=react'],
        exclude: /node_modules/,
        test: /\.js[x]?$/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.js', '.css', '.less']
  },
  devServer: {
    contentBase: '../public/dist',
    port: 4000
  }
};
