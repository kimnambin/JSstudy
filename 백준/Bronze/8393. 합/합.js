const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  //.split('');

const A = Number(input);
let sum = 0;

for (let i = 1; i <= A; i++) {
  sum += i;
}
console.log(sum);