const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  

  const a = input[1].split(' ').map(Number);
  const b = input[3].split(' ').map(Number);



  let seta = new Set(a);

  let result = b.map(v => (seta.has(v) ? 1 : 0));

  return result.join('\n');
}

console.log(solution(input));