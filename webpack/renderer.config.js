const path = require('path');
const rules = require('./rules');
const plugins = require('./plugins');

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
