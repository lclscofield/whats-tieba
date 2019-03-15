module.exports = {
  configureWebpack: {
    target: 'electron-renderer'
  },
  devServer: {
    port: 10109
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/global.scss";`
      }
    }
  }
}
