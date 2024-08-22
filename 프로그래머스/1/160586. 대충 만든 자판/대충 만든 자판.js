function solution(keymap, targets) {
    var answer = [];
    
    //먼저 키맵 최솟값을 해볼게!!
    const 키맵최솟값 = {}
    
    for(let i = 0; i < keymap.length; i ++){
        for(let j =0; j < keymap[i].length; j ++){
            
            if(!키맵최솟값[keymap[i][j]]   ||  j + 1 < 키맵최솟값[keymap[i][j]] ) //알파벳이 들어가지 않았거나 최솟값을 칮은 경우에만 넣기
                {키맵최솟값[keymap[i][j]] = j+1
               }
        }
    }
    
    //자 이제 값 구하기
    for (let i =0; i < targets.length; i ++){
        let result =0; 
        for(let j =0; j < targets[i].length; j ++){
            
            if(키맵최솟값[targets[i][j]]){
                result += 키맵최솟값[targets[i][j]]
                 console.log(키맵최솟값["A"])
            }else{
                result = -1
                break;
            }
        }
        answer.push(result)
    }
    return answer;
}