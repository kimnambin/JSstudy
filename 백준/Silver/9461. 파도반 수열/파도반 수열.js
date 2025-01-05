const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')
.map(Number)

function dp(n){
   let dpList = new Array(n+1).fill(0)

   if(n < 3) return 1
   
   dpList[0] = 1
   dpList[1] = 1
   dpList[2] = 1

   let i = 3
   while(i <= n){
    dpList[i] =  dpList[i-2] +  dpList[i-3]
    i++
   }
   return dpList[n]
}

let result = []

for(let i = 1; i <= input[0]; i++){
    result.push(dp(input[i] -1 ))
}

console.log(result.join('\n'))