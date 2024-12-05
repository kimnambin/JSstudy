const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const maxNum = Math.max(...nums);
const minNam = Math.min(...nums);

console.log(maxNum * minNam);
