const tsImportPluginFactory = require('ts-import-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IS_PRO = process.env.NODE_ENV === 'production';

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
    test: /\.tsx?$/, // test: /\.(jsx|tsx|js|ts)$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        // ts 按需加载
        getCustomTransformers: () => ({
          before: [ tsImportPluginFactory({
            'libraryName': 'antd',
            'style': true
          }) ]
        }),
        compilerOptions: {
          module: 'es2015'
        }
      }
    }
  },
  {
    test: /\.css$/,
    use: [{ loader: IS_PRO ? MiniCssExtractPlugin.loader : 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      // Creates `style` nodes from JS strings
      { loader: IS_PRO ? MiniCssExtractPlugin.loader : 'style-loader' },
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
      { loader: IS_PRO ? MiniCssExtractPlugin.loader : 'style-loader' },
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
  {
    test: /\.(webp|jpg|png|gif)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 2048,
        name: '[name].[hash:8].[ext]',
        outputPath: './static/images'
      }
    }
  },
  // {
  //   loader: require.resolve('file-loader'),
  //   exclude: [/\.(js|mjs|jsx|ts|tsx|css|less|scss)$/, /\.html$/, /\.json$/],
  //   options: {
  //     name: 'static/media/[name].[ext]',
  //   },
  // }
];
