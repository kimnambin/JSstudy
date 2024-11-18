const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const [n,k] = input[0].split(' ').map(Number)
const arr = input.splice(1).map(Number)



function bs(length , n){
    let left = 1
    let right = Math.max(...arr)
    let answer = 0
    
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        let cnt = 0
        
        for(const v of arr){
            cnt += Math.floor(v/mid)
        }
        
        if (cnt >= n){
            answer = mid
            left = mid +1
        }else {
            right = mid -1
        }
    }
    return answer
    
}

let result = bs(arr,k)

console.log(result);