const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [A, B] = input;

const start = Math.min(A, B);
const end = Math.max(A, B);
let cnt = end - start - 1

console.log(cnt > 0 ? cnt : 0)
if (cnt > 0)
  console.log([...Array(cnt)].map((_, i) => start + i + 1).join(' '));

