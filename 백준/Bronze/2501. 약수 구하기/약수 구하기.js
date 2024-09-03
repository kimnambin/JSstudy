const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let tmp = [];

for (let i = 1; i <= input[0]; i++) {
  if (input[0] % i === 0) tmp.push(i);
}

if (input[1] <= tmp.length) {
  console.log(tmp[input[1] - 1]);
} else {
  console.log(0);
}