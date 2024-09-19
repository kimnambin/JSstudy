const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let company = {};
let result = [];

for (let i = 1; i <= N; i++) {
  let m = input[i].split(' ');
  company[m[0]] = m[1].trim();
}

for (const v in company) {
  if (company[v] == 'enter') {
    result.push(v);
  }
}

let new_result = result.sort().reverse().slice(0).join('\n');
console.log(new_result);