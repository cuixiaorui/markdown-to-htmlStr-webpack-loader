var remark = require("remark");
var loaderUtils = require("loader-utils");
var html = require("remark-html");

module.exports = function (markdown) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();

  remark()
    .use(html, options)
    .process(markdown, function (err, file) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, `export default \`${String(file)}\``);
    });
};
