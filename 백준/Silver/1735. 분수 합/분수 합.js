const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

let result = ' ';

let 분모 = b * d;
let 분자 = a * d + c * b;

const min = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

result += 분자 / min(분자, 분모) + ' ' + 분모 / min(분자, 분모);

console.log(result.trim());