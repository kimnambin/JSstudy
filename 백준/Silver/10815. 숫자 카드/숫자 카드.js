const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let N_num = input[1].split(' ').map(Number);

let M = Number(input[2]);
let M_num = input[3].split(' ').map(Number);

let new_N = new Set(N_num);

let result = M_num.map(i => (new_N.has(i) ? 1 : 0));

console.log(result.join(' '))