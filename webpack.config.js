const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    // path: __dirname + '/dist', // dev
    path: path.resolve(__dirname, 'dist/'), // production
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devServer: {
    // contentBase: './dist'
    contentBase: 'public/',
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        // options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
