const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const fs = require('fs')
const baseConfig = require('./webpack.config.base.js')

const manifest = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../lib/manifest.json')))

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
              name: '[local]-[name]-[hash]',
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
    ],
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
    new BundleAnalyzer(),
    new DashboardPlugin(),
    new HtmlPlugin({
      title: '开发',
      template: path.resolve(__dirname, '../src/templates/index.html'),
      reactDll: `./lib/${manifest['react.js']}`,
      rxjsDll: `./lib/${manifest['rxjs.js']}`,
    }),
  ],
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
}

module.exports = merge(baseConfig, devConfig)
