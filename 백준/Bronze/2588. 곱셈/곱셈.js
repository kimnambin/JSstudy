const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const A = Number(input[0]);
const B = input[1];

console.log(
  `${A * Number(B[2])}\n${A * Number(B[1])}\n${A * Number(B[0])}\n${
    A * Number(B)
  }`,
);