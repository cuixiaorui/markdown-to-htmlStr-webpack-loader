const path = require("path");
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve("../index.js"),
            options: {
              closeSelfClosing: false,
            },
          },
        ],
      },
    ],
  },
};
