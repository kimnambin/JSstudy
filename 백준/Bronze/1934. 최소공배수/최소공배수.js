const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const N = Number(input[0]);
let result = [];

const 최소공약수 = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const 최대공배수 = (a, b) => {
  return (a * b) / 최소공약수(a, b);
};

for (let i = 1; i <= N; i++) {
  let [A, B] = input[i].split(' ').map(Number);
  result.push(최대공배수(A, B));
}

console.log(result.slice(0).join('\n'));
