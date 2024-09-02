const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();
// .split('\n');

// 짝수 : 분모 + 1 / 분자 - 1
// 홀수 : 분모 - 1 /  분자 + 1

let 분자 = 1;
let 분모 = 1;
let 처음시작 = Number(input);
let 대각선 = 1;

while (처음시작 > 대각선) {
  처음시작 -= 대각선;
  대각선++;

  //대각선의 첫번째 위치일때
  if (대각선 % 2 === 0) {
    분자 = 1;
    분모 = 대각선;
  } else {
    분자 = 대각선;
    분모 = 1;
  }
}

//중간일때
if (대각선 % 2 === 0) {
  분자 += 처음시작 - 1;
  분모 -= 처음시작 - 1;
} else {
  분자 -= 처음시작 - 1;
  분모 += 처음시작 - 1;
}

console.log(`${분자}/${분모}`);