const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let result = 0;
let stack = [];

for (let i = 1; i < input.length; i++) {
  while (stack.length > 0 && stack[stack.length - 1] <= input[i]) {
    stack.pop();
  }
  stack.push(input[i]);
  result += stack.length - 1;
}

console.log(result);