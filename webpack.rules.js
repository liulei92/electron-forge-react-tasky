module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  },
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      // Creates `style` nodes from JS strings
      { loader: 'style-loader' },
      // Translates CSS into CommonJS
      { loader: 'css-loader' },
      // Compiles Sass to CSS
      { loader: 'sass-loader' },
    ],
  },
  {
    test: /\.less$/,
    // exclude: /node_modules/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            // 定制主题
            modifyVars: {
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
  {
    test: /\.module\.less$/,
    exclude: /node_modules/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'less-loader',
        options: {
          modules: true,
          sourceMap: true,
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
];
