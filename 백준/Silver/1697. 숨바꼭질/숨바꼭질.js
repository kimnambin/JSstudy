const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [n, m] = input;
const visited = Array(100001).fill(false);
const queue = [[n, 0]];

let idx = 0;
while (queue.length > idx) {
  const [y, x] = queue[idx++];

  if (visited[y]) continue;

  visited[y] = true;

  if (y == m) {
    console.log(x);
    break;
  }

  for (let next of [y + 1, y - 1, y * 2]) {
    if (!visited[next] && next >= 0 && next <= 1000000) {
      queue.push([next, x + 1]);
    }
  }
}