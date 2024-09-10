const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const boardpan = input.slice(1); //이게 주어진 보드판

const 패턴1 = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const 패턴2 = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

let 정답 = Infinity;

//먼저 주어진 인풋(보드판)을 8 * 8 만들기
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let new_board = 0;
    let new_board2 = 0;

    //패턴과 비교하기
    for (let k = 0; k < 8; k++) {
      for (let e = 0; e < 8; e++) {
        if (패턴1[k][e] !== boardpan[i + k][j + e]) new_board++;
        if (패턴2[k][e] !== boardpan[i + k][j + e]) new_board2++;
      }
    }
    정답 = Math.min(정답, new_board, new_board2);
  }
}

console.log(정답);