/* eslint-disable */
module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'webapp',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/zh/guide/webpack.md
  chainWebpack: (config) => {
    // html-loader & markdown-loader
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('markdown-loader')
      .loader('html-loader')
    //     .loader('markdown-loader')
    //     .options({})

    // html-webpack-plugin
    config
      .plugin('html')
      .tap(args => {
        args[0].favicon = 'public/favicon.png';
        return args;
      })
  },
  configureWebpack: () => {},
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // default: 生产环境下是 true, 开发环境下是 false
    // extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    iconPaths: {
      favicon32: 'img/favicon/favicon-32x32.png',
      favicon16: 'img/favicon/favicon-16x16.png',
      appleTouchIcon: 'img/favicon/apple-touch-icon-152x152.png',
      maskIcon: 'img/favicon/safari-pinned-tab.svg',
      msTileImage: 'img/favicon/msapplication-icon-144x144.png'
    },
    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'public/service-worker.js',
    // }
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 4321,
    https: false,
    hotOnly: false,
    // 设置代理, 监听后台端口
    // proxy: 'http://127.0.0.1:7001',
    proxy: 'https://www.doco.dev',
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
   // ...
  }
 }
 