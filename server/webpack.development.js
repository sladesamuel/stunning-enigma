const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const merge = require("webpack-merge")
const nodeExternals = require("webpack-node-externals")
const path = require("path")
const { HotModuleReplacementPlugin } = require("webpack")

const common = require("./webpack.common.js")

module.exports = merge.smart(common, {
  devtool: "inline-source-map",
  entry: [
    "webpack/hot/poll?1000",
    path.join(__dirname, "src/main.ts")
  ],
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?1000"]
    })
  ],
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin()
  ],
  watch: true
})