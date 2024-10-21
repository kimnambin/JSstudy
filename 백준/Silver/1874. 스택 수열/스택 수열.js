const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const solution = input => {
    const N = Number(input[0])
    const sortNum = input.slice(1).map(Number)
    
    let stack = []; //비교용
    let result = []; //최종 정답용
    let j = 1; //stack에 순서대로 수열에 넣을 용도
    for(let i =0; i< N; i++){
    while(j <= sortNum[i]){
        stack.push(j++)
        result.push('+')
    }    
        
        if(stack[stack.length -1] === sortNum[i]){
            stack.pop()
            result.push('-')
        }
        else{
            return 'NO'
        }
    }
    return result.join('\n')
}

console.log(solution(input))