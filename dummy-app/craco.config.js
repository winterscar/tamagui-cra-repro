const webpack = require('webpack')
const { shouldExclude } = require('tamagui-loader')


const NODE_ENV = process.env.NODE_ENV || 'development'
const target = process.env.TAMAGUI_TARGET || 'web'

const boolVals = {
  true: true,
  false: false,
}

const disableExtraction =
boolVals[process.env.DISABLE_EXTRACTION] ?? process.env.NODE_ENV === 'development'

const tamaguiOptions = {
  config: './tamagui.config.ts',
  components: ['@tamagui/core', 'tamagui', '@my/ui'],
  importsWhitelist: ['constants.js', 'colors.js'],
  logTimings: true,
  disableExtraction,
  shouldExtract: (path) => {
    if (path.includes('packages/app')) {
      return true
    }
  }
}

module.exports = {
  webpack: {
    alias: {
      'react-native$': 'react-native-web',
      'react-native/Libraries/Renderer/shims/ReactFabric': '@tamagui/proxy-worm',
    },
    resolve: {
      alias: {
        'react-native$': 'react-native-web',
        'react-native/Libraries/Renderer/shims/ReactFabric': '@tamagui/proxy-worm',
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        process: {
          env: {
            __DEV__: NODE_ENV === 'development' ? 'true' : 'false',
            IS_STATIC: '""',
            NODE_ENV: JSON.stringify(NODE_ENV),
            TAMAGUI_TARGET: JSON.stringify(target),
            DEBUG: JSON.stringify(process.env.DEBUG || 0),
          },
        },
      }),
    ],
    mode: 'extends',
    configure: { 
      module: {
        rules: [
          {
            test: /\.(ts|js)x?$/,
            exclude: (path) => shouldExclude(path, __dirname, tamaguiOptions),
            use: [
              {
                loader: 'tamagui-loader',
                options: tamaguiOptions,
              },
            ],
          },
        ],
      }, 
    }
  },
}