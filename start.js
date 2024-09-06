// const input = require('fs').readFileSync('/dev/stdin').toString().split('');.split(/\s+/);

//백준  2292 벌집

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = Number(input);

let 번호 = 1;
let range = 1;

while (num > range) {
  range += 번호 * 6;
  번호++;
}

console.log(번호);
