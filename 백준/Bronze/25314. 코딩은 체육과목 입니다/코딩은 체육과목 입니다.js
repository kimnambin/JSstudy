const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();
// .split('');

const X = Number(input);
const result = 'long '.repeat(X / 4) + 'int';

console.log(result);