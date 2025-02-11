function solution(n) {
    if(n === 1) return 1
    if(n === 2) return 2 % 1234567
    
    let dp = new Array(n+1).fill(0)
    
    for(let i = 3; i <= n; i++){
        dp[1] = 1
        dp[2] = 2
        
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567
    }
   
    return dp[n] ;
}