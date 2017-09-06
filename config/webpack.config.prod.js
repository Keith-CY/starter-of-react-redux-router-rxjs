const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')

const prodConfig = {
  entry: {
    app: path.resolve(__dirname, '../src/app.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                name: '[local]-[name]-[hash:5]',
                importLoaders: 3,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: path.resolve(__dirname, './config/postcss.config.json'),
              },
            },
            'resolve-url-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      filename: 'scripts/vendor-[hash:5].min.js',
    }),
    new HtmlPlugin({
      title: '生产',
      template: path.resolve(__dirname, '../src/templates/index.html'),
      minify: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeTagWhitespace: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name]-[contenthash:5].css',
    }),
    new UglifyJSPlugin(),
    new SWPrecachePlugin(),
  ],
}

module.exports = merge(baseConfig, prodConfig)
