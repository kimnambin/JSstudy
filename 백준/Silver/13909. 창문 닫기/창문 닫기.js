const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

console.log(Math.floor(Math.sqrt(Number(input))));