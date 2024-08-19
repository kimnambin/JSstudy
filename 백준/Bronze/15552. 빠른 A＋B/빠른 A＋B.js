const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
//.trim()
.split('\n');

const X = Number(input[0]);
let sum = '';

for (let i = 1; i <= X; i++) {
  let num = input[i].split(' ');
  sum += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(sum);