const solution = (clothes) => {
    var answer = 1;
    let kind = {}
    
    for(let i =0; i < clothes.length; i++){
        let type = clothes[i][1]
        kind[type] = (kind[type] || 0) + 1
    }
    
    for(const cnt of Object.values(kind)){
        console.log(cnt)
        answer *= (cnt +1)
    }
    return answer - 1;
}