const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

//우선 첫번째 줄
let firstLine = input[0].split(' ').map(Number);

//임시로 A와 B를 담을 공간
let A = [];
let B = [];

// A
for (let i = 1; i <= firstLine[0]; i++) {
  A.push(input[i].split(' ').map(Number));
}

// B
for (let i = firstLine[0] + 1; i <= 2 * firstLine[0]; i++) {
  B.push(input[i].split(' ').map(Number));
}

// 최종 정답
const result = [];

// A와 B를 더해서 result 배열에 저장
for (let i = 0; i < firstLine[0]; i++) {
  const row = [];
  for (let j = 0; j < firstLine[1]; j++) {
    row.push(A[i][j] + B[i][j]);
  }
  result.push(row);
}

console.log(result.map(row => row.join(' ')).join('\n'));
