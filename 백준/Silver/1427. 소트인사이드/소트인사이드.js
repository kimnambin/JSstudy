const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('')
  .sort((a, b) => b - a);

console.log(input.join(''));