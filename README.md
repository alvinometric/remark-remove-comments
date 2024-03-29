# remark-remove-comments

<!-- prettier-ignore-start -->
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![version](https://img.shields.io/npm/v/remark-remove-comments.svg?style=flat-square)](https://www.npmjs.com/package/remark-remove-comments)
[![MIT License](https://img.shields.io/npm/l/remark-remove-comments.svg?style=flat-square)](https://github.com/alvinometric/remark-remove-comments/blob/main/LICENSE)
<!-- prettier-ignore-end -->

[**Remark**](https://github.com/remarkjs/remark) plugin to remove HTML comments from the processed output.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (version 14.14+, or 16.0+, 18.0+, 19.0+), install with [npm](https://docs.npmjs.com/cli/install):

```sh
npm install remark-remove-comments
```

## Use

Say we have the following file, `example.md`:

```markdown
# Hello World

This is a markdown file, with text in it.

<!-- But in this file there's a comment, like "TODO: fix 😅",
  I don't want this to appear in the HTML output, it's just for me -->
```

And our script, `example.js`, looks as follows:

```js
import { readFileSync } from 'node:fs';
import remark from 'remark';
import removeComments from 'remark-remove-comments';

remark()
  .use(removeComments)
  .process(readFileSync('example.md', 'utf-8'), (err, file) => {
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

Removes every HTML node that matches [this regex](https://github.com/stevemao/html-comment-regex)

## License

[MIT](LICENSE) © https://alvin.codes/

<!-- Definitions -->

[downloads-badge]: https://img.shields.io/npm/dm/remark-remove-comments.svg?style=flat-square
[downloads]: https://www.npmjs.com/package/remark-remove-comments
[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-remove-comments.svg?style=flat-square
[size]: https://bundlephobia.com/result?p=remark-remove-comments
