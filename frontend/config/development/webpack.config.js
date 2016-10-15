const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');

const autoprefixerBrowsers = ['last 2 versions', '> 1%', 'opera 12.1', 'bb 10', 'android 4'];

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
        test: /\.js[x]?$/,
        loaders: ['react-hot-loader/webpack', 'babel?cacheDirectory=true,presets[]=es2015,presets[]=stage-2,presets[]=react'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.(jpg|png|otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: "file?name=public/dist/[path][name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      jquery: "jquery"
    })
  ],
  lessLoader: {
    lessPlugins: [
      new LessPluginAutoPrefix({ browsers: autoprefixerBrowsers })
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.less']
  },
  devServer: {
    contentBase: '../public/dist',
    port: 4000
  }
};
