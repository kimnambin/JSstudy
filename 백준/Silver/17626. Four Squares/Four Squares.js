const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()

const N = Number(input)

function count(n){
    const dp = new Array(n+1).fill(0)
    
    for(let i = 1; i <= n; i++){
        dp[i] = dp[i-1] + 1
        
        for(let j = 1; j * j <= i; j++){
            dp[i] = Math.min(dp[i] , dp[i- j*j] + 1)
        }
    }
    return dp[n]
}

console.log(count(N))