function solution(n, lost, reserve) {
    var answer = 0;
   
    
    let 잃어버린자 = lost.filter((v) => !reserve.includes(v)).sort((a,b) => a-b)
    let 가진자 = reserve.filter((v) => !lost.includes(v)).sort((a,b) => a-b)
     answer += n - 잃어버린자.length
    for(let i = 0 ; i < 잃어버린자.length; i ++){
        for(let j =0; j < 가진자.length; j++){
            if(잃어버린자[i]+1 === 가진자[j] || 잃어버린자[i]-1 === 가진자[j]){
                answer +=1;
                가진자[j] = -1
                break;
            }
        }
    }
    return answer;
}