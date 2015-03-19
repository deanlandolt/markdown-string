// stupid simple markdown template strings
// dervied from https://github.com/brianleroux/micromark

var commonmark = require('commonmark');
var reader = new commonmark.DocParser();
var writer = new commonmark.HtmlRenderer();
var LINE_BREAK = /\n/;
var P_TAG_WRAP = /^<p>(.*)<\/p>\r?\n?$/i;

module.exports = function markdownTag(strings) {
  var input = strings[0];
  for (var i = 1, length = arguments.length; i < length; ++i) {
    input += arguments[i] + strings[i];
  }
  var parsed = writer.render(reader.parse(input));

  // if string is all on one line (contains no line breaks) strip <p> wrapper
  if (!LINE_BREAK.test(input)) {
    var wrapped = parsed.match(P_TAG_WRAP);
    if (wrapped) {
      parsed = wrapped[1];
    }
  }

  return parsed;
};
