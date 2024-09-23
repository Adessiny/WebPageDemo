const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      console.log('Environment Variables:', process.env);
      return middlewares;
    },
  },
})

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

configureWebpack: {
	plugins: [new NodePolyfillPlugin()]
}
