const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const n = Number(input[0]);
  let body = [];
  let rank = Array(n).fill(1); //등수

  for (let i = 1; i <= n; i++) {
    body.push(input[i].split(' ').map(Number));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {


      if (i !== j) {
        if (body[i][0] > body[j][0] && body[i][1] > body[j][1]) {
          rank[j]++;
        }
      }
    }
  }

  return rank.join(' ');
}

console.log(solution(input));