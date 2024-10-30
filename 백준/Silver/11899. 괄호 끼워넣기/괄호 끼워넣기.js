const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('');

let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] == '(') {
    stack.push('(');
  } else if (input[i] == ')') {
    if (stack.length > 0 && stack[stack.length - 1] == '(') {
      stack.pop();
    } else {
      stack.push(')');
    }
  }
}

console.log(stack.length);