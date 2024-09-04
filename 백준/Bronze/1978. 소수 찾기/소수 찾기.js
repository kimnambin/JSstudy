const input = require('fs')  
.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let 두번째 = input[1].split(' ');
let result = 0;

for (let i = 0; i < 두번째.length; i++) {
  let cnt = 2;
  let tmp = [];
  for (let j = 1; j <= 두번째[i]; j++) {
    if (Number(두번째[i]) % j === 0) {
      tmp.push(j);
    }
  }
  if (tmp.length === 2) result++;
}

console.log(result);