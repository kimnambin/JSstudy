const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const tmp = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  tmp.push([x, y]);
}

tmp.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

for (let v of tmp) {
  console.log(v[0], v[1]);
}
