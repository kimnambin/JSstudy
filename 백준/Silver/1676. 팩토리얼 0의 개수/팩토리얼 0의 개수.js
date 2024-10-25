const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

function solution(input) {
  let num = Number(input);
  let cnt = 0;

  while (num >= 5) {
    num = Math.floor(num / 5);
    cnt += num;
  }

  return cnt;
}

console.log(solution(input));