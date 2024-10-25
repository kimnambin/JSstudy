const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('');

function solution(input) {
  let result = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt(0) - 97 >= 0) {
      result += input[i].toUpperCase();
    } else {
      result += input[i].toLowerCase();
    }
  }
  return result;
}

console.log(solution(input));