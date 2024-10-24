const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const solution = input => {
  const N = Number(input[0]);
  let result = 0;

  for (let i = 0; i < N; i++) {
    result += (input[1][i].charCodeAt(0) - 96) * Math.pow(31, Number(i));
  }
  return result;
};

console.log(solution(input));