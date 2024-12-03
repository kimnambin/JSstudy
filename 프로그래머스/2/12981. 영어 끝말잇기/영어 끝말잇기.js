function solution(n, words) {
    let answer = [0,0];
    
    for(let i = 0; i < words.length; i++){
        let people = (i % n) + 1
        let turn = Math.floor(i / n) + 1
        
       
        
        if( i > 0){
            let lastSTR = words[i-1].at(-1)
            
            if(i > words.indexOf(words[i]) || words[i][0] !== lastSTR){
                answer = [people , turn]
                break
            }
        }
    }

   
    return answer;
}