const path = require("path");

module.exports = {
  entry: {
    popup: "./src/popup/popup.js",
    background: "./src/background.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
