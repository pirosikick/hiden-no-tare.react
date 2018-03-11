const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, { mode }) => ({
  mode,
  entry: "./src",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  plugins:
    mode === "development"
      ? [
          new HTMLPlugin({
            template: "./public/index.html"
          })
        ]
      : [
          new HTMLPlugin({
            template: "./public/index.html"
          }),
          new UglifyJSPlugin()
        ]
});
