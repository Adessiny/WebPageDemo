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
