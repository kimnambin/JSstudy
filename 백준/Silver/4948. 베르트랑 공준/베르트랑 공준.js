const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')
.map(Number)

let result = []

for(let i = 0; i < input.length -1; i++){
    let max_number = input[i] * 2
    let sosu = Array(max_number + 1).fill(true)
    sosu[0] = sosu[1] = false;
    
    for(let k = 2; k * k <= max_number; k++){
        if(sosu[k]){
            for(let e = k *k ; e <= max_number; e+=k){
                sosu[e] = false;
            }
        }
    }
    
    let cnt = 0;
    for(let j = input[i] + 1; j <= max_number; j++){
        if(sosu[j]){
            cnt ++
        }
    }
    result.push(cnt)
}

console.log(result.slice(0).join('\n'))