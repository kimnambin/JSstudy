const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const A = Number(input[0])

for(let i = 1; i <=A; i++){
    const [one , two] = input[i].split(' ')
    
    console.log(Number(one) + Number(two))
}

