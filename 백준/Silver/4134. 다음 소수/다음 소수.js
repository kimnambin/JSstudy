const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const N = Number(input[0])
let result =[]

for(let i =1; i <= N; i++){
    let num = Number(input[i])
    //만약 num이 2미만일 경우
    if (num === 0 || num === 1) {
        result.push(2)
    }
    else{
        while(true){
              let sosu = true;
            //처음부터 소수일 경우
            for(let j = 2; j * j <= num; j++){
                if(num % j === 0){
                    sosu = false;
                    break;
                }
            }
            
            //그렇지 않고 소수를 찾기
            if(sosu){
                result.push(num)
                break;
            }
            num ++; //소수가 나올 때까지 +=1
        }
    }
}

console.log(result.join('\n'))