const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.(?:png|pdf|jpg)$/,
        use: "file-loader",
      },
    ],
  },
  output: {
    filename: "bundle.js",
  },
  node: {
    fs: "empty",
  },
  resolve: {
    alias: {
      "##": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [new Dotenv()],
};
