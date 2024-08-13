function solution(dartResult) {
    let answer = []; //이게 정답
    let num = 0; //숫자를 담을 것
    let temp = ''; //임시로 사용
    
    for(let i = 0; i < dartResult.length; i++){
        
        //먼저 숫자 찾기
        if(dartResult[i] >= '0' && dartResult[i] <= '9'){
            temp += dartResult[i]
        }
        //숫자 제외
        else if(dartResult[i] === 'S' || dartResult[i] === "D" || dartResult[i] === "T"){
            //여기서 tmp 숫자로 변형하고 num으로
            num = Number(temp , 10)
            temp = '';
            
            if (dartResult[i] === 'S') num = Math.pow(num, 1);
            else if (dartResult[i] === 'D') num = Math.pow(num, 2);
            else if (dartResult[i] === 'T') num = Math.pow(num, 3);
            
            answer.push(num)    
        }
        
        // #이랑 *
        else if(dartResult[i] === '#' || dartResult[i] === '*'){
            if(dartResult[i] === '#'){
                answer[answer.length-1] *= -1
            }
            else if(dartResult[i] === '*'){
                if(answer.length > 1) answer[answer.length - 2] *= 2; 
                 answer[answer.length - 1] *= 2;
            }
        }
    }
    return answer.reduce((a,b) => a+b ,0);
}