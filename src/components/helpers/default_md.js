'use strict';

export default function () {
  return `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Piece of code:

\`\`\`javascript
  function sum (a, b) {
    return a + b;
  }
\`\`\`

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

*[Serhii Vladymyrov](https://vladymyrov.com/)*
  `;
}
