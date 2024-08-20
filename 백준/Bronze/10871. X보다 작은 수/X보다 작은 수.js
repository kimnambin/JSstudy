const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sum = '';
const a = input[0].split(' ').map(Number);
const b = input[1].split(' ').map(Number);

for (let i = 0; i < a[0]; i++) {
  if (a[1] > b[i]) {
    sum += b[i] + ' ';
  }
}

console.log(sum);