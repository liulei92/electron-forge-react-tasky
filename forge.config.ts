/*
 * @Description: forge.config.ts
 * @Date: 2021-07-08 14:23:48
 * @Author: LeiLiu
 */
module.exports = {
  'packagerConfig': {
    'name': 'tasky',
    'executableName': 'tasky',
    'icon': 'assets/icons/icon',
    'asar': true,
    'extraResource': [
      'assets'
    ],

    // name: 'MyApp',
    // executableName: 'MyApp',
    // asar: true,
    // icon: 'src/images/icon128@2x',
    // ignore: ['./.webpack/'],
    // appBundleId: 'MyAppId',
    // osxSign: {
    //   identity: 'Developer ID Application: John Smith(90210)',
    //   hardenedRuntime: true,
    //   'gatekeeper-assess': false,
    //   entitlements: 'static/entitlements.plist',
    //   'entitlements-inherit': 'static/entitlements.plist',
    //   'signature-flags': 'library'
    // },
    // osxNotarize: {
    //   appleId: process.env.APPLE_ID,
    //   appleIdPassword: process.env.APPLE_PASSWORD
    // }
  },
  'makers': [
    {
      'name': '@electron-forge/maker-squirrel',
      'config': {
        'name': 'tasky'
      }
    },
    {
      'name': '@electron-forge/maker-zip',
      'platforms': [
        'darwin'
      ]
    },
    {
      'name': '@electron-forge/maker-deb',
      'config': {
        'name': 'tasky'
      }
    }
  ],
  'publishers': [
    {
      'name': '@electron-forge/publisher-github',
      'repository': {
        'owner': 'liulei92',
        'name': 'electron-forge-react-tasky'
      },
      'prerelease': false,
      'releaseType': 'release',
      'authToken': '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'
    }
  ],
  'plugins': [
    [
      '@electron-forge/plugin-webpack',
      {
        'mainConfig': './webpack/main.config.js',
        'renderer': {
          'config': './webpack/renderer.config.js',
          'entryPoints': [
            {
              'html': './src/index.html',
              'js': './src/renderer.tsx',
              'name': 'main_window',
              'preload': {
                'js': './electron/bridge.ts'
              }
            },
            {
              'html': './src/remind/index.html',
              'js': './src/remind/renderer.tsx',
              'name': 'remind_window',
              'preload': {
                'js': './electron/bridge.ts'
              }
            }
          ]
        }
      }
    ]
  ]
};