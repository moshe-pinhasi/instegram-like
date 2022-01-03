const path = require("path");

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/kisser-game/'
  //   : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/scss/abstracts/_functions.scss'),
        path.resolve(__dirname, './src/assets/scss/abstracts/_variables.scss'),
        path.resolve(__dirname, './src/assets/scss/abstracts/_mixins.scss'),
        path.resolve(__dirname, './src/assets/scss/abstracts/_i18n-mixins.scss'),
      ]
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Insta-Like'
        args[0].description = "Example of instegram"
        
        return args
      })
  }
}
