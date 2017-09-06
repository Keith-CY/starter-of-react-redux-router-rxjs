const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const htmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const baseConfig = require('./webpack.config.base.js')


const devConfig = {
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, '../src/app.tsx'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              name: '[local]-[name]-[hash]'
            }
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new DashboardPlugin(),
    new htmlPlugin({
      title: '开发',
      template: path.resolve(__dirname, '../src/templates/index.html'),
    }),
  ],
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
}

module.exports = merge(baseConfig, devConfig)
