const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const 알파벳 = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};

let 다양알파벳 = input[0].split('');
let 숫자 = Number(input[1]);

let cnt = 0;

for (let i = 0; i < 다양알파벳.length; i++) {
  const 계산 =
    알파벳[다양알파벳[i]] !== undefined
      ? 알파벳[다양알파벳[i]]
      : Number(다양알파벳[i]);
  cnt += 계산 * Math.pow(숫자, 다양알파벳.length - 1 - i);
}

console.log(cnt);