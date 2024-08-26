const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

let tmp = '';

for (let j = input.length - 1; j >= 0; j--) {
  tmp += input[j];
}

console.log(input === tmp.slice(0, input.length) ? 1 : 0);