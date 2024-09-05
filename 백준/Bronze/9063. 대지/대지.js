const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/);

const N = Number(input[0]);
let xtmp = [];
let ytmp = [];

let result = [];

if (N === 1) {
  console.log(0);
} else {
  for (let i = 1; i <= N * 2 - 1; i += 2) {
    let x = input[i];
    xtmp.push(x);
  }

  let newx = xtmp.sort((a, b) => a - b);
  result.push(newx[N - 1] - newx[0]);

  for (let i = 2; i <= N * 2; i += 2) {
    let y = input[i];
    ytmp.push(y);
  }

  let newy = ytmp.sort((a, b) => a - b);
  result.push(newy[N - 1] - newy[0]);

  console.log(result[0] * result[1]);
}
