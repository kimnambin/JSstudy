function solution(k, tangerine) {
    var answer = 0;
    
    let obj ={}
    
    for(let i = 0; i < tangerine.length; i++){
        obj[tangerine[i]] = (obj[tangerine[i]]|| 0) + 1
    }
    
    const newObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
        for(let i = 0; i < newObj.length; i++){
            if(k > 0){
             k -= newObj[i][1]
            
            answer++     
            }
        }    
    
    
    return answer;
}