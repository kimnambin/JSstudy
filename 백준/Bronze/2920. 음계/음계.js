const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const solution = input => {
  return input.slice(0).join('') === '12345678'
    ? 'ascending'
    : input.slice(0).join('') === '87654321'
    ? 'descending'
    : 'mixed';
};

console.log(solution(input));
