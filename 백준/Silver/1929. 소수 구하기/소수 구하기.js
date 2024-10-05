const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let result = [];

const maxNumber = input[1];

const sosu = Array(maxNumber + 1).fill(true);
sosu[0] = sosu[1] = false;

for (let i = 2; i <= maxNumber; i++) {
  if (sosu[i]) {
    for (let j = i * i; j <= maxNumber; j += i) {
      sosu[j] = false;
    }
  }
}

for (let i = input[0]; i <= maxNumber; i++) {
  if (sosu[i]) {
    result.push(i);
  }
}

console.log(result.slice(0).join('\n'));