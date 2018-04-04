const path = require('path');
const webpack = require('webpack');
const SmartBannerPlugin = require('smart-banner-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = path.join(__dirname, 'src');
const pkg = require('./package.json');

module.exports = {
  context: src,
  entry: {
    webslides: './js/full.js'
  },
  output: {
    filename: './static/js/[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        include: src
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?url=false!postcss-loader!sass-loader'
        }),
        include: src
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('/static/css/webslides.css'),
    new SmartBannerPlugin({
      banner: `Name: PaperStar-Show\nVersion: ${pkg.version}\nDate: ${new Date().toISOString().slice(0,10)}\nDescription: ${pkg.description}\nURL: ${pkg.homepage}\nBy: YunYouJun\n BaseOn: https://github.com/webslides/webslides`,
      raw: false,
      entryOnly: true
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: '../index.html',
      inject: false
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: path.resolve(__dirname, './dist/static'),
        ignore: ['.*']
      }
    ])
  ]
};
