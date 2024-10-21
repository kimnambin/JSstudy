const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('');

const solution = input => {
  let stack = [];
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push('(');
    } else {
      stack.pop();
      if (input[i - 1] === '(') {
        result += stack.length;
      } else {
        result += 1;
      }
    }
  }

  return result;
};

console.log(solution(input));