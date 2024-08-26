const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

let result = '';

//데칼코마니 위쪽 부분 여기는 공백이 4 ->3 ->2 ...
for (let i = 1; i <= input; i++) {
  let line = '';

  //빈 공간 만들기
  for (let j = 1; j <= input - i; j++) {
    line += ' ';
  }

  //* 집어넣기
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += '*';
  }
  result += line + '\n';
}
// ==========================================================
//이제 데칼코마니 아래 부분 (중간 부터 시작!!) 공백이 1 ->2 ->3
for (let i = input - 1; i >= 1; i--) {
  let line = '';

  //빈 공간 만들기
  for (let j = 1; j <= input - i; j++) {
    line += ' ';
  }

  //* 집어넣기
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += '*';
  }
  result += line + '\n';
}

console.log(result);