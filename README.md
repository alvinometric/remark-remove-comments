# remark-remove-comments

[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[**Remark**](https://github.com/remarkjs/remark) plugin to remove HTML comments from the processed output.

## Install

[npm](https://docs.npmjs.com/cli/install):

```sh
npm install remark-remove-comments
```

## Use

Say we have the following file, `example.md`:

```markdown
# Hello World

This is a markdown file, with text in it.

<!-- But in this file there's a comment, and I'm writing this just for myself so I don't want to it to appear in the HTML output -->
```

And our script, `example.js`, looks as follows:

```js
const remark = require('remark');
const removeComments = require('remark-remove-comments');

remark()
  .use(removeComments)
  .process(fs.readFileSync('example.md', 'utf-8'), function (err, file) {
    if (err) throw err;
    console.log(String(file));
  });
```

Now, running `node example` yields:

```markdown
# Hello World

This is a markdown file, with text in it.
```

## API

### `remark().use(removeComments)`

Removes comments.

- Removes every HTML node that matches [this regex](https://github.com/stevemao/html-comment-regex)

## License

[MIT](license) © alvin.codes

<!-- Definitions -->

[downloads-badge]: https://img.shields.io/npm/dm/remark-remove-comments.svg
[downloads]: https://www.npmjs.com/package/remark-remove-comments
[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-remove-comments.svg
[size]: https://bundlephobia.com/result?p=remark-remove-comments
