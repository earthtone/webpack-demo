const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, 'stylelint.config.js'),
      context: path.resolve(__dirname, './src/css'),
      files: '**/*.css',
      failOnError: false,
      quiet: false
    }),
    new MiniCssExtractPlugin()
  ]
}
