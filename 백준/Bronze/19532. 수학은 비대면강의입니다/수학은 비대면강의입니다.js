const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const [a, b, c, d, e, f] = input.map(Number);

const 나누기 = a * e - b * d;

const x = (c * e - b * f) / 나누기;
const y = (a * f - d * c) / 나누기;

console.log(`${x} ${y}`);