function solution(n) {
    var answer = 1; //최종 정답
    let start = 1; 
    let num = 0;
    
    while(start <= n/2){
        num = 0
        let process = start
        
        while(num < n){
            num += process
            process ++
        }
        if(num == n){
            answer ++
        }
        
        start ++
    }
    return answer;
}