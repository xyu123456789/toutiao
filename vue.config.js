const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 自动的打开浏览器，指定端口和服务器port,host
  // 关闭eslint检查
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost'
    }
  }
})
