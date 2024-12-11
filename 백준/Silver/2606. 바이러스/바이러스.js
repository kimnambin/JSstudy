const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const total = Number(input[0]);
const nums = Number(input[1]);

let graph = [...new Array(total + 1)].map(() => []);
let visited = [...new Array(total + 1)].fill(0);
let result = 0;

for (let i = 2; i < 2 + nums; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function dfs(a) {
  visited[a] = 1;
  for (const num of graph[a]) {
    if (!visited[num]) {
      result++;
      dfs(num);
    }
  }
}
dfs(1);
console.log(result);