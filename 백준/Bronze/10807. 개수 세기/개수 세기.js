const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let sum = 0;
const x = Number(input[0]);
const a = input[1].split(' ');
const y = input[2];

for (let i = 0; i < a.length; i++) {
  if (a[i] === y) {
    sum++;
  }
}

console.log(sum);