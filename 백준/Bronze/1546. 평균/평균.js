const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = input[0];
const y = input[1].split(' ').map(Number);

let M = y.sort((a, b) => b - a);
let sum = 0;
// let orSum = 0;

for (let i = 0; i < y.length; i++) {
  sum += (y[i] / M[0]) * 100;
  // orSum += y[i];
}

console.log(sum / x);