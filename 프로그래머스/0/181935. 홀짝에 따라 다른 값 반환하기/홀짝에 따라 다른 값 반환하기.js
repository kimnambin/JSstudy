function solution(n) {
    var answer = 0;
    
    //홀수라면
    if(n % 2 !== 0){
        for(let i= 1; i <= n; i+=2){
            answer += i
        }
    }
    //짝수라면
    else{
         for(let i=2; i <= n; i+=2){
            answer += (Math.pow(i,2))
        }
    }
    return answer;
}