const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let result = [];

for (let i = 1; i <= N; i++) {
  let M = input[i].split(' ');
  result.push(M);
}

result.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

for (let v of result) {
  console.log(v[0], v[1]);
}
