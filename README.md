# markdown-string

Markdown compilation in es6 template strings

```js
var md = require('markdown-string')

var args = { exclamation: '!!1' }

md`compiles **markdown** strings to *html* strings${args.exclamation}`
// 'compiles <strong>markdown</strong> strings to <em>html</em> strings!!1'

md`
# Multiline Strings
    
* such
* wow${args.exclamation}
`
// '<h1>Multiline Strings</h1>\n<ul>\n<li>such</li>\n<li>wow</li>\n</ul>\n'
```
