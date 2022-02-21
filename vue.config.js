
"use strict";
const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
const name = "fx-h5";
 
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  transpileDependencies: ['uview-ui'],
  // 路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@/components": resolve("src/components"),
        "@/common": resolve("src/common"),
        "@/store": resolve("src/store"),
        "@": resolve("src"),
      },
    },
  },
}