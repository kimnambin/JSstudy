const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();
console.log((Number(input) - 1) * Number(input));