const path = require("path");
const webpack = require("webpack");
const memoryfs = require("memory-fs");

module.exports = (markdownFile, options = {}) => {
  const compiler = webpack({
    mode: "development",
    entry: path.resolve(__dirname, markdownFile),
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: path.resolve(__dirname, "../index.js"),
              options,
            },
          ],
        },
      ],
    },
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
};
