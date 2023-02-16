const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/proxy": {
        target: "https://i.maoyan.com",
        changeOrigin: true, // true：可以跨域
        pathRewrite: {
          "^/proxy": "",
        },
      },
    },
  },
});
