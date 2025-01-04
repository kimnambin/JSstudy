const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let idx = 0;
const ts = Number(input[idx++]);

let result = [];

for (let i = 0; i < ts; i++) {
  const n = Number(input[idx++]);
  const obj = {};

  for (let i = 0; i < n; i++) {
    const [close, body] = input[idx++].split(' ');

    if (!obj[body]) {
      obj[body] = [];
    }
    obj[body].push(close);
  }

  let fac = 1;

  for (const body in obj) {
    fac *= obj[body].length + 1;
  }

  result.push(fac - 1);
}

console.log(result.join('\n'));
