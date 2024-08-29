const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const 거스름돈 = [25, 10, 5, 1];

let N = Number(input[0]);

let result = '';

for (let i = 1; i <= N; i++) {
  let 동전개수 = [];
  let 돈 = Number(input[i]);

  for (let j = 0; j < 거스름돈.length; j++) {
    동전개수.push(Math.floor(돈 / 거스름돈[j]));
    돈 -= 거스름돈[j] * Math.floor(돈 / 거스름돈[j]);
  }

  result += 동전개수.join(' ') + '\n';
}

console.log(result.trim());