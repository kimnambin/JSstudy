const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = Number(input[0]);

let result = '';

for (let i = 1; i <= x; i++) {
  let y = input[i].split(' ');
  let tmp = '';

  for (let k = 0; k < y[1].length; k++) {
    tmp += y[1][k].repeat(Number(y[0]));
  }

  result += tmp + '\n';
}

console.log(result.trim());