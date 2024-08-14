const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

//45분 마이너스 했을 때 분이 마이너스가 되는 경우
if (B - 45 < 0 && A > 0) {
  console.log(A - 1, B - 45 + 60);
} else if (A === 0 && B - 45 < 0) {
  console.log(23, B - 45 + 60);
} else {
  console.log(A, B - 45);
}