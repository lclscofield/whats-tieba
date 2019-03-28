const path = require('path')

module.exports = {
  devServer: {
    port: 10109,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        ws: true,
        changeOrigin: true
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/css/global.scss";'
      }
    }
  }
}
