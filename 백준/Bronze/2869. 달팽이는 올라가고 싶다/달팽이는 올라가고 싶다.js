const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const [A, B, V] = input.map(Number);

let 하루올라감 = A - B;
let 마지막날제외 = V-A;


console.log(Math.ceil(마지막날제외/하루올라감) + 1);