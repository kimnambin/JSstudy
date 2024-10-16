const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

const [n, k] = input.split(' ').map(Number);

let tmp = {};
let result = [];

// 초기화
for (let i = 1; i <= n; i++) {
  tmp[i] = false;
}

let now_index = 0; //현재 인덱스
let remaining = n; //남은 사람 수

while (remaining > 0) {
  let cnt = 0;

  while (cnt < k) {
    now_index = (now_index % n) + 1;
    if (!tmp[now_index]) {
      cnt++;
    }
  }

  result.push(now_index);
  tmp[now_index] = true;
  remaining--;
}

console.log('<' + result.join(', ') + '>'); 