const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

let n = Number(input);
console.log(2 ** n);