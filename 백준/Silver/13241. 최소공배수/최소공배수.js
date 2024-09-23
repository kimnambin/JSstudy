const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

const [A,B] = input.split(' ').map(Number)

const min = (a,b) => {
    while (b !== 0){
        [a,b] = [b, a%b]
    }
    return a
}

const max = (a,b) => {
    return (a*b)/min(a,b)
}

console.log(max(A,B))