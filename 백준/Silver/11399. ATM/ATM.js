const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const time = input[1].split(' ').map(Number);

const solution = (N, time) => {
  const sort_time = time.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i <= N; i++) {
    let a = sort_time.slice(0, i);
    sum += a.reduce((a, b) => a + b, 0);
  }

  return sum;
};

console.log(solution(N, time));