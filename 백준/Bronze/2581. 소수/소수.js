const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);


const M = input[0];
const N = input[1];

let 소수 = [];
let 합계 = 0;
let 최소값 = Infinity;

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    소수.push(i);
    합계 += i;
    if (i < 최소값) 최소값 = i;
  }
}

if (소수.length > 0) {
  console.log(합계);
  console.log(최소값);
} else {
  console.log(-1);
}
