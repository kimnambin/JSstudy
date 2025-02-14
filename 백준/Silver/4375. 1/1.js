const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')
.map(Number);

let result = []

for (let i = 0; i < input.length; i++) {
  let num = 1;
  let cnt = 1;

  while (num % input[i] !== 0) {
      num = (num * 10 + 1) % input[i];
      cnt++;
    }
    result.push(cnt);
  }


console.log(result.join('\n'))