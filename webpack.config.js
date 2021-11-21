const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: ["*", ".tsx", ".ts", ".js", ".scss"],
    fallback: {
      querystring: false,
    },
    modules: ["node_modules"],
    alias: {
      "@test-utils": path.resolve(__dirname, "Tests", "test-utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
