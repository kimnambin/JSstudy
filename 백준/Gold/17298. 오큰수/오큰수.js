const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let num = input[1].split(' ').map(Number);

let result = new Array(n).fill(-1)
let stack = []

for(let i = 0; i < n; i++){
    while(stack.length > 0 && num[stack[stack.length - 1]] < num[i]){
        result[stack.pop()] = num[i]
    }    
    stack.push(i)
}

console.log(result.join(' '));