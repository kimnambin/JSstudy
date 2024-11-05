const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input[0];
const num = input.slice(1).sort((a, b) => a - b);

//1. 산술평균
let avg = Math.round(num.reduce((a, b) => a + b, 0) / N);
console.log(avg == -0 ? 0 : avg);

// 2. 중앙값
// 6 -> 3 5-> 2.5(2)
let mid = Math.floor(N / 2);
console.log(num[mid]);

// 3. 최빈값
let cnt = {};

num.forEach(v => {
  cnt[v] = (cnt[v] || 0) + 1;
});

let maxcnt = 0;
let tmp = [];

for (const [k, v] of Object.entries(cnt)) {
  if (v > maxcnt) {
    maxcnt = v;
    tmp = [k];
  } else if (v === maxcnt) {
    tmp.push(k);
  }
}

console.log(tmp.length > 1 ? tmp.sort((a, b) => a - b)[1] : tmp[0]);

//4. 범위

console.log(Math.max(...num) - Math.min(...num));
