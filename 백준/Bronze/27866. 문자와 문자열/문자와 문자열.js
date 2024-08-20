const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = input[0];
const y = input[1];

console.log(x[y - 1]);