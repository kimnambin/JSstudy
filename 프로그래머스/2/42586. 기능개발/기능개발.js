function solution(progresses, speeds) {
    var answer = [];
    
    let remained = progresses.map((v,i) => {
        return Math.ceil((100 - v) / speeds[i])
    })
    
    let cnt = 1
    let top_pro = remained[0]
    
    for(let i = 1; i < remained.length; i++){
        if(top_pro >= remained[i]){
            cnt ++
        }
        else{
            answer.push(cnt)
            cnt = 1
            top_pro = remained[i]
        }
    }
    answer.push(cnt)
    
    
    return answer;
}