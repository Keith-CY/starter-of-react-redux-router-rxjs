const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    react: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux',
      'redux-actions',
    ],
    rxjs: [
      'rxjs',
      'redux-observable',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name]_[hash:5].js',
    library: '[name]_[hash:5]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash:5]',
      path: path.resolve(__dirname, '../lib', '[name]-manifest.json'),
    }),
    new ManifestPlugin(),
  ],
}
