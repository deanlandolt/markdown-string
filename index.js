// stupid simple markdown template strings
// dervied from https://github.com/brianleroux/micromark

var commonmark = require("commonmark");
var reader = new commonmark.DocParser();
var writer = new commonmark.HtmlRenderer();

module.exports = function markdown(source) {
  return writer.render(reader.parse(source.join('')));
}
