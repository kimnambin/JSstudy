const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let result = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== 0) {
    result.push(input[i]);
  } else if (input[i] == 0) {
    result.pop();
  }
}

console.log(result.reduce((a, b) => a + b, 0));