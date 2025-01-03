const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let tmp = [];

for (let i = 1; i <= N; i++) {
  tmp.push(input[i].trim());
}

let str_arr = tmp.sort((x, y) => {
  if (x.length === y.length) {
    return x.localeCompare(y);
  }
  return x.length - y.length;
});

console.log([...new Set(str_arr)].slice(0).join('\n'));
