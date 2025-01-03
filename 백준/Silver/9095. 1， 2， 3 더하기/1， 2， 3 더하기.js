const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const result = [];

const dp = n => {
  const list = new Array(n + 1).fill(0);
  list[0] = 1;

  for (let i = 1; i <= n; i++) {
    if (i >= 1) {
      list[i] += list[i - 1];
    }
    if (i >= 2) {
      list[i] += list[i - 2];
    }
    if (i >= 3) {
      list[i] += list[i - 3];
    }
  }

  return list[n];
};

for (let i = 1; i <= input[0]; i++) {
  result.push(dp(input[i]));
}

console.log(result.join('\n'));