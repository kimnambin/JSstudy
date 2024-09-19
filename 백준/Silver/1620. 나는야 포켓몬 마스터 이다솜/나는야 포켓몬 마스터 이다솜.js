const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [N, M] = input[0].split(' ').map(Number);
let pokemondogam = {};
let result = [];

for (let i = 1; i <= N; i++) {
  pokemondogam[input[i].trim()] = i;
}

for (let i = N + 1; i < input.length; i++) {
  //문자일 경우
  if (Number(input[i]) * 0 !== 0) {
    result.push(pokemondogam[input[i].trim()]);
  }
  //문자가 아닐 경우
  else {
    result.push(input[Number(input[i])]);
  }
}

console.log(result.slice(0).join('\n'));