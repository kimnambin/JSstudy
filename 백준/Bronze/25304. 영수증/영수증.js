const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/);

const X = Number(input[0]); //이게 결제 금액
const N = Number(input[1]); //이게 결제 종류
let sum = 0;

for (let i = 2; i < N * 2 + 2; i += 2) {
  let 가격 = Number(input[i]);
  let 갯수 = Number(input[i + 1]);
  sum += 가격 * 갯수;
}

if (X === sum) console.log('Yes');
else console.log('No');