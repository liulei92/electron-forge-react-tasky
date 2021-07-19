const path = require('path');
const rules = require('./rules');
const plugins = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IS_PRO = process.env.NODE_ENV === 'production';

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
// });

module.exports = {
  devtool: IS_PRO ? false : 'cheap-module-source-map',
  output: {
    chunkFilename: (pathData) => {
      return pathData.chunk.name === 'main' ? '[name].js' : './static/js/[name].[chunkhash:8].js';
    },
  },
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    IS_PRO && new MiniCssExtractPlugin({
      filename: './static/css/[name].css',
      chunkFilename: './static/css/[name].[chunkhash:8].css'
    })
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.sass', '.less'],
    // fallback: {
    //   'fs': 'empty',
    //   'path': false
    // },
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components'),
    },
  },
};
