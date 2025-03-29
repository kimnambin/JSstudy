const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [m, n] = input[0].split(' ').map(Number);
const graph = input.slice(1).map(v => v.split(' ').map(Number));
let queue = [];
let result = 0;

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// 익은 토마토 찾기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] == 1) {
      queue.push([i, j]);
    }
  }
}

let index = 0;

// BFS 순회하기
while (queue.length > index) {
  let size = queue.length - index;
  for (let i = 0; i < size; i++) {
    const [y, x] = queue[index++];

    for (let j = 0; j < dir.length; j++) {
      const [dy, dx] = [y + dir[j][0], x + dir[j][1]];

      if (dy >= 0 && dx >= 0 && dy < n && dx < m && graph[dy][dx] == 0) {
        graph[dy][dx] = 1;
        queue.push([dy, dx]);
      }
    }
  }
  if (queue.length > index) {
    result++;
  }
}

// 다 순회했는데 남아 있는 경우
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] == 0) {
      console.log(-1);
      return;
    }
  }
}

console.log(result);