const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');


const n = Number(input[0]);
const tmp = [];
let head = 0;
let result = [];

for (let i = 1; i <= n; i++) {
  const command = input[i].trim().split(' ');

  switch (command[0]) {
    case 'push':
      tmp.push(command[1]);
      break;
    case 'pop':
      if (tmp.length > head) {
        result.push(tmp[head]);
        head++;
      } else {
        result.push(-1);
      }
      break;
    case 'size':
      result.push(tmp.length - head);
      break;
    case 'empty':
      result.push(tmp.length === head ? 1 : 0);
      break;
    case 'front':
      result.push(tmp.length > head ? tmp[head] : -1);
      break;
    case 'back':
      result.push(tmp.length > head ? tmp[tmp.length - 1] : -1);
      break;
  }
}

console.log(result.join('\n'));
