const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const 단어의길이 = Math.max(...input.map((i) => i.length));

let result =''

for(let i =0; i < 단어의길이; i++){
    for (let j = 0; j < input.length; j++) {
        result += input[j][i] || ''
    }
}

console.log(result)