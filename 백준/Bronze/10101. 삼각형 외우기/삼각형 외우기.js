const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = Number(input[0]);
const y = Number(input[1]);
const z = Number(input[2]);

if (x + y + z !== 180) {
  console.log('Error');
} else if (x === 60 && y === 60 && z === 60) {
  console.log('Equilateral');
} else if (x === y || y === z || x === z) {
  console.log('Isosceles');
} else {
  console.log('Scalene');
}