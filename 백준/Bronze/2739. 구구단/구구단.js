const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('');

const A = Number(input[0]);


for (let i = 1; i < 10; i++) {
  console.log(`${A} * ${i} = ${A * i}`);
}
