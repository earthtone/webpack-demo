const path = require('path')

<<<<<<< HEAD
=======
const VueLoaderPlugin = require('vue-loader/lib/plugin')
>>>>>>> 5a32cf4... Add PostCSS Autoprefixer Plugin and Index HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      exclude: /node_modules/,
      use: 'vue-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
<<<<<<< HEAD
=======
        'vue-style-loader',
>>>>>>> 5a32cf4... Add PostCSS Autoprefixer Plugin and Index HTML
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, 'stylelint.config.js'),
      context: path.resolve(__dirname, './src/css'),
      files: '**/*.css',
      failOnError: false,
      quiet: false
    }),
    new MiniCssExtractPlugin({
      filename: dev ? '[name].css' : '[name].[hash].css',
      chunkFilename: dev ? '[id].css' : '[name].[id].[hash].css'
<<<<<<< HEAD
    })
=======
    }),
    new VueLoaderPlugin()
>>>>>>> 5a32cf4... Add PostCSS Autoprefixer Plugin and Index HTML
  ]
}
