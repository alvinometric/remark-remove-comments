const remark = require('remark');
const test = require('tape');
const removeComments = require('.');

const original = `
<!-- This is comment #1 -->
Hello this is Markdown and it's a fantastic format.
<!-- This is comment #2 -->
`;

test('Removes HTML comment', function (t) {
  const noComments = remark().use(removeComments).processSync(original).toString();

  t.equal(noComments, `Hello this is Markdown and it's a fantastic format.\n`);

  t.end();
});
