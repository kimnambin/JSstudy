const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let num = input[1].split(' ').map(Number); //중복 제거 전
let result = {};

let new_num = [...new Set(num)].sort((a, b) => a - b); //중복 제거

for (let i = 0; i < new_num.length; i++) {
  result[new_num[i]] = i;
}

let print = '';

for (let v of num) {
  print += result[v] + ' ';
}

console.log(print.trim());