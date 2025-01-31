const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

const N = Number(input);

const top = (N,start,end,sub,result) => {
    if(N === 0) return
    
    top(N-1,start,sub,end,result)
    result.push(`${start} ${end}`)
    top(N-1,sub,end,start,result)
}

let result = []
top(N,1,3,2,result)
result.unshift(result.length)

console.log(result.join('\n'))