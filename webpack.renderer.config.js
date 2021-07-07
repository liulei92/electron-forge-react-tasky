const path = require('path');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
// });

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.sass', '.less'],
    fallback: {
      'fs': 'empty',
      'path': false
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
