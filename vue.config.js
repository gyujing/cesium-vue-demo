const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);


module.exports = {
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /.js$/,
      include: path.resolve(__dirname, 'node_modules/cesium/Source'),
      use: { loader: require.resolve('@open-wc/webpack-import-meta-loader') }
    })

    config.resolve.alias = {
      "@": resolve("src"),
    }
  }
}
