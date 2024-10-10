const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const N = Number(input[0])
let result = []; //최종 정답

for(let i =1; i <= N; i++){
    let tmp = []; //스택으로 사용할 용도
    let fact = true;
    
    for(const x of input[i]){
        
        // ( 이게 등장한 경우
        if(x == '('){
            tmp.push(x)
        }
        // ) 이게 등장한 경우
        else{
            //tmp가 비었을 경우
            if(tmp.length == 0){
               fact = false
                break
               }
               //tmp에 뭐가 담겨 있을 경우
               tmp.pop()
        }
    }   
        if(fact && tmp.length == 0){
            result.push("YES")
        }else{
            result.push("NO")
        }
    }

console.log(result.join('\n'))