[Electron Forge with react?](https://stackoverflow.com/questions/62489701/electron-forge-with-react)
[Electron脚手架 - ElectronForge文档](https://blog.csdn.net/wanzheng_96/article/details/118223970)
[Electron + React + Ant Design 配置及打包](https://juejin.cn/post/6968495702183772190)
[Anitorious/electron-forge-typescript-webpack-react-starter](https://github.com/Anitorious/electron-forge-typescript-webpack-react-starter)

https://github.com/codesbiome/electron-react-webpack-typescript-2021


[如何在 React 项目中整合 Eslint 和 Prettier？](https://www.cnblogs.com/qianxiaox/p/14025819.html)

[electron工程化](http://tvshow.date/2021/01/07/electron%E5%B7%A5%E7%A8%8B%E5%8C%96/)

[electron 基操学习2](https://juejin.cn/post/6947981584519823367)

https://www.bookstack.cn/read/electronjs-13.0-zh/f2f462fc684d62d7.md

通过CI系统自动构建与发布
https://blog.csdn.net/chenggedian7759/article/details/100985590
https://travis-ci.com/github/liulei92/electron-forge-react-tasky/builds
http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html

electron 无边框窗口拖拽，不用 drag 样式和三方库，纯代码实现
https://zhuanlan.zhihu.com/p/112564936

### 启动项目
```
yarn start
```

### 打包
```
yarn package
```

### 生成编译包
```
yarn make
```

### 拓展

#### 1.antd 在ts中使用按需加载
```
1.安装
npm install ts-import-plugin -D

2.在ts-loader中使用
const tsImportPluginFactory = require('ts-import-plugin');

{
  test: /\.tsx?$/,
  exclude: /(node_modules|\.webpack)/,
  use: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
      getCustomTransformers: () => ({
        before: [
          tsImportPluginFactory({
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
          })
        ]
      }),
      compilerOptions: {
        module: 'es2015'
      }
    }
  }
}
```

#### 2.编译阶段CSS样式抽离之 mini-css-extract-plugin 插件
```
1.区分环境
package.json中使用执行命令时传参
npm install cross-env -D

2.对原命令扩展
"start": "cross-env NODE_ENV=development electron-forge start",
"package": "cross-env NODE_ENV=production electron-forge package",
"make": "cross-env NODE_ENV=production electron-forge make",

3.添加mini-css-extract-plugin插件
npm install mini-css-extract-plugin -D

4.在css 和 less 规则使用

const IS_PRO = process.env.NODE_ENV === 'production'

{
  test: /\.css$/,
  use: [
    { loader: IS_PRO ? MiniCssExtractPlugin.loader : 'style-loader' },
    { loader: 'css-loader' }
  ],
},

{
  test: /\.less$/,
  use: [
    { loader: IS_PRO ? MiniCssExtractPlugin.loader : 'style-loader' },
    { loader: 'css-loader' },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  ]
},

5.plugins 中添加
plugins: [
  IS_PRO && new MiniCssExtractPlugin({
    filename: './static/css/[name].css',
    chunkFilename: './static/css/[name].chunk.css'
  })
] 
```

#### 3.使用图片资源
```
1.添加loader
npm install file-loader -D

{
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|mjs|jsx|ts|tsx|css|less|scss)$/, /\.html$/, /\.json$/],
  options: {
    name: 'static/images/[name].[ext]',
  },
},

2.使用方式
组件中 import image from "./static/***.png"
less中 background-image: url("./static/***.png")
经过上面的loader，最终会编译为 staic/images/***

---------------------------------------------

- 其他
还可以使用url-loader，方式类似 好像这个更好用
{
  test: /\.(webp|jpg|png|gif)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 2048,
      name: '[name].[ext]',
      outputPath: './static/images'
    }
  }
},

使用方式同 file-loader
```