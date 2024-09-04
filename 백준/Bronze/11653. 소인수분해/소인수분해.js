const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();


let num = Number(input);
let tmp = [];
let i = 2;

while (num > 1) {
  if (num % i === 0) {
    tmp.push(i);
    num = num / i;
  } else {
    i++;
  }
}

for (let i = 0; i < tmp.length; i++) {
  console.log(tmp[i]);
}