const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let tmp = [];
let result = []; // 최종 정답

for (let i = 1; i < input.length; i++) {
  // 1인 경우
  if (input[i] === 1) {
    tmp.push(input[i + 1]);
    i++;
  }
  // 2인 경우
  else if (input[i] === 2) {
    if (tmp.length > 0) {
      result.push(tmp.pop());
    } else {
      result.push(-1);
    }
  }
  // 3인 경우
  else if (input[i] === 3) {
    result.push(tmp.length);
  }
  // 4인 경우
  else if (input[i] === 4) {
    result.push(tmp.length === 0 ? 1 : 0);
  }
  // 5인 경우
  else if (input[i] === 5) {
    if (tmp.length > 0) {
      result.push(tmp[tmp.length - 1]);
    } else {
      result.push(-1);
    }
  }
}

console.log(result.join('\n'));
