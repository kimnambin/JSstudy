const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function dp(n){
    let dpList = new Array(n+1).fill(0)
    
    dpList[1] = 1
    dpList[2] = 2
    
    if(n === 1) return 1
    if(n === 2) return 2
    
    for (let i = 3; i <= n; i++) {
    dpList[i] = (dpList[i - 1] + dpList[i - 2]) % 10007;
  }

  return dpList[n];
}

console.log(dp(input));