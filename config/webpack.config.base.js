const path = require('path')
const webpack = require('webpack')
const reactManifest = require('../lib/react-manifest')
const rxjsManifest = require('../lib/rxjs-manifest')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // entry: {
  //   vendor: [
  //     'react',
  //     'react-dom',
  //     'react-redux',
  //     'react-router',
  //     'react-router-dom',
  //     'redux',
  //     'redux-actions',
  //     'redux-observable',
  //     'rxjs',
  //   ],
  // },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[name]-[hash:5].js',
    chunkFilename: 'scripts/[name]-[chunkhash:5].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.(jpg|png)/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name]-[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest'],
    // }),
    new webpack.DllReferencePlugin({
      manifest: reactManifest,
    }),
    new webpack.DllReferencePlugin({
      manifest: rxjsManifest,
    }),
    new CopyPlugin([
      { from: path.resolve(__dirname, '../lib/*.js') },
    ]),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.css', '.json'],
  },
}
