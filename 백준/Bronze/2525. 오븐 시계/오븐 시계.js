const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/);

let A = Number(input[0]); 
let B = Number(input[1]); 
const C = Number(input[2]); 


B += C;

A += Math.floor(B / 60);
B = B % 60;

A = A % 24;

console.log(A, B);
