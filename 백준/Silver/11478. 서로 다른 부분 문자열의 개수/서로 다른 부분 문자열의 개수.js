const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  ;

let str_set = new Set();

for(let i =0; i < input.length; i ++){
    for(let j = i ; j < input.length; j++){
        str_set.add(input.slice(i,j+1))
    }
}

console.log(str_set.size)