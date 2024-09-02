const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();
// .split('\n');

if (Number(input) === 1) {
  console.log(1);
} else {
  let 방번호 = 1;
  let 시작번호 = 2;

  while (시작번호 <= Number(input)) {
    시작번호 += 방번호 * 6;
    방번호++;
  }

  console.log(방번호);
}