// const input = require('fs').readFileSync('/dev/stdin').toString().split('');.split(/\s+/);

//2563번 색종이

const input = require('fs')
  .readFileSync('C:\\Users\\82109\\Desktop\\Study\\JSstudy\\input.txt')
  .toString()
  .trim()
  .split('\n');

// 2차원 배열 만들기
let map = Array.from(Array(100), () => Array(100).fill(0));

//가로 , 세로 채워 넣기!!
for (let i = 1; i <= input[0]; i++) {
  let [가로, 세로] = input[i].split(' ').map(Number);

  for (let a = 가로; a < 가로 + 10; a++) {
    for (let b = 세로; b < 세로 + 10; b++) {
      map[a][b] = 1;
    }
  }
}

let cnt = 0;

//이제 차지하는 공간 구하기
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (map[i][j] == 1) cnt++;
  }
}

console.log(cnt);
