// vue.config.js
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  indexPath: "index.html",
  filenameHashing: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://172.23.4.46:9080", // 生产
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "": ""
        }
      }
    }
  },
  lintOnSave: process.env.NODE_ENV === "production" ? false : "error",
  productionSourceMap: false,
  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },
  parallel: require("os").cpus().length > 1
};
