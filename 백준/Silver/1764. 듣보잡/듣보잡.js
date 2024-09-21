const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].trim().split(' ').map(Number); // N은 듣보, M은 보못

const members = {};
const result = [];

for (let i = 1; i <= N; i++) {
  members[input[i].trim()] = 0;
}

for (let j = N + 1; j <= N + M; j++) {
  const name = input[j].trim();
  if (members[name] !== undefined) {
    members[name] += 1;
  }
}

for (let k = 1; k <= N; k++) {
  const name = input[k].trim();
  if (members[name] > 0) {
    result.push(name);
  }
}

result.sort();
console.log(result.length);
console.log(result.join('\n'));