function solution(clothes) {
    var answer = 1;
    let obj = {}
    
    for(let i = 0; i < clothes.length; i++){
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 0) + 1
    }
    
    for(const idx in obj){
        answer *= obj[idx] +1
    }
    
    return answer - 1;
}