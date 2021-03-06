const path = require('path');

module.exports = {
  devtool: process.env.NODE_ENV !== 'development' ? false : 'cheap-module-source-map', // SourceMap
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './electron/main.ts',
  // Put your normal webpack config below here
  mode: 'development',
  module: {
    rules: require('./rules'),
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