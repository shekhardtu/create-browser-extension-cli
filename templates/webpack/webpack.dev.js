const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ExtensionReloader = require("webpack-extension-reloader");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new ExtensionReloader({
      manifest: "./config/manifest-chrome.json", // HMR for Chrome
    }),
  ],
  watch: true, // Enable file watching
});
