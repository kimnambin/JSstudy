// const input = require('fs').readFileSync('/dev/stdin').toString().split('');.split(/\s+/);

const input = require('fs')
  .readFileSync('C:\\Users\\82109\\Desktop\\Study\\JSstudy\\input.txt')
  .toString()
  .trim()
  .toUpperCase()
  .split('');

const 알파벳 = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 0,
  P: 0,
  Q: 0,
  R: 0,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  W: 0,
  X: 0,
  Y: 0,
  Z: 0,
};

//먼저 인풋애들 알파벳 나온 수 만큼 세기
for (let i = 0; i < input.length; i++) {
  if (알파벳.hasOwnProperty(input[i])) {
    알파벳[input[i]]++;
  }
}

//가장 많이 나온 애를 찾기 위함
let cnt = 0;
let tmp = [];

for (let v in 알파벳) {
  //1번이상 등장한 경우
  if (알파벳[v] > cnt) {
    cnt = 알파벳[v];
    tmp.length = 0; //다음 알파벳에 영향을 주지 않도록 초기화
    tmp.push(v);
  } //등장 하지 않은 경우
  else if (알파벳[v] === cnt) {
    tmp.push(v);
  }
}

console.log(tmp.length > 1 ? '?' : tmp);
