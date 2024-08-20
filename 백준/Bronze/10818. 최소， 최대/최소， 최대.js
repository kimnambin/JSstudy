const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sum = '';
const a = input[0].split(' ').map(Number);
const b = input[1].split(' ').map(Number);
const aa = b.sort((a, b) => b - a);

sum += aa[a - 1] + ' ' + aa[0];

console.log(sum);