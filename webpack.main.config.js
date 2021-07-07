const path = require('path');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  mode: 'development',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', '.scss', '.sass', '.less'],
    fallback: {
      'fs': false,
      'path': false
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};