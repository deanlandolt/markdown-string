# markdown-string
Markdown compilation in es6 template strings

```js
var md = require('markdown-string')

md`returns _markdown_ compiled as an *html* string`
// '<p>returns <em>markdown</em> compiled as an <em>html</em> string</p>\n'

md`
# Multiline Strings
    
* such
* wow
`
// '<h1>Multiline Strings</h1>\n<ul>\n<li>such</li>\n<li>wow</li>\n</ul>\n'
```
