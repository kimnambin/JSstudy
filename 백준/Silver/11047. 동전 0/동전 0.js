const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [n, k] = input[0].split(' ').map(Number);
let kind = input.slice(1).map(Number);

kind.sort((a, b) => b - a);

let cnt = 0;

for (let i = 0; i < kind.length; i++) {
  if (k == 0) {
    break;
  } else {
    if (k >= kind[i]) {
      cnt += Math.floor(k / kind[i]);
      k %= kind[i];
    }
  }
}

console.log(cnt);