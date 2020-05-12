const compiler = require("./compiler");

describe("markdown-to-htmlStr-loader", () => {
  it("解析 md 文件为 html 字符串", async () => {
    const stats = await compiler("./fixture/doc.md");
    const result = stats.toJson().modules[0].source;
    const expectHtmlStr = `export default \`<h2>this is a test</h2>
    <p><img src="" alt="图片"></p>
    <p>hahahaha</p>
    \``;
    assertStringIsEqual(result, expectHtmlStr);
  });
});

function assertStringIsEqual(actualStr, expectStr) {
  expect(actualStr.replace(/\s/g, "")).toBe(expectStr.replace(/\s/g, ""));
}
