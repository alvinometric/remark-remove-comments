import test from 'node:test';
import assert from 'node:assert/strict';
import { remark } from 'remark';
import removeComments from './index.js';

const original = `
<!-- This is comment #1 -->
Hello this is Markdown and it's a fantastic format.
<!-- This is comment #2 -->
`;

const jsxBlock = `<b>References:</b> [README](./README.md)<!-- -->, [CONTRIBUTING](./CONTRIBUTING.md)`;

test('Removes HTML comment', function (t) {
  const noComments = remark().use(removeComments).processSync(original).toString();

  assert.equal(noComments, `Hello this is Markdown and it's a fantastic format.\n`);
});

test('Removes HTML comment in JSX block', function (t) {
  const noComments = remark().use(removeComments).processSync(jsxBlock).toString();

  assert.equal(
    noComments,
    `<b>References:</b> [README](./README.md), [CONTRIBUTING](./CONTRIBUTING.md)\n`,
  );
});
