const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [n, ...arr] = input;
arr = arr.map(i => i.split(' ').map(Number));
let result = '';

for (let i = 0; i < arr.length; i += 2) {
  let cnt = 0;
  let idx = arr[i][1]; //목표 인덱스
  let numbers = arr[i + 1]; //주어진 넘버들

  while (true) {
    let max = Math.max(...numbers);
    let fir = numbers.shift();

    if (max === fir) {
      cnt++;
      if (idx === 0) {
        result += cnt + '\n';
        break;
      }
    } else {
      numbers.push(fir);
    }

    if (idx === 0) {
      idx = numbers.length - 1;
    } else {
      idx--;
    }
  }
}

console.log(result.trim());