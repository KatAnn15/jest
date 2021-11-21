const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const path = require("path");
const TsPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(tsx?|jsx?)$/i,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "src"),
    historyApiFallback: true,
    open: true,
    port: 8080,
  },
  plugins: [
    new TsPathsWebpackPlugin({
      configFile: path.resolve(__dirname, "tsconfig.json"),
    }),
  ],
});
