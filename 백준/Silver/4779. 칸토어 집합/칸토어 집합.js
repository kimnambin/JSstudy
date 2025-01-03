const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const result = [];

function cutText(n) {
  const line = new Array(Math.pow(3, n)).fill('-');

  for (let i = 0; i < n; i++) {
    let leng = Math.pow(3, n - i - 1);
    for (let j = 0; j < line.length; j += 3 * leng) {
      for (let k = j + leng; k < j + 2 * leng; k++) {
        line[k] = ' ';
      }
    }
  }

  return line.join('');
}

for(let i = 0; i < input.length; i++){
    result.push(cutText(input[i]))
}

console.log(result.join('\n'))