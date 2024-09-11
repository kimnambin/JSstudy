function solution(new_id) {
    var tmp = new_id.toLowerCase();;
    let result =''
   
    //먼저 문자 제거하기!!
    for(let i = 0; i < tmp.length; i++){
    if(tmp[i] !== '-' && tmp[i] !== '.' && tmp[i] !== '_' &&
      (tmp[i] < 'a' || tmp[i] > 'z') && (tmp[i] < '0' || tmp[i] > '9'
                                        )){
        continue;
    }
        result += tmp[i] 
    }

    
    //연속 된 점 제거하기
    let new_result = '';
    for (let i = 0; i < result.length; i++) {
        if (!(result[i] === '.' && new_result[new_result.length - 1] === '.')) {
            new_result += result[i];
        }
    }
    
    //맨 앞과 뒤에 점이 있을 때
    if (new_result[0] === '.') new_result = new_result.slice(1);
    if (new_result[new_result.length - 1] === '.') new_result = new_result.slice(0, new_result.length - 1);
    
    //  길이 
    if (new_result.length > 15) {
        new_result = new_result.slice(0, 15);
        if (new_result[new_result.length - 1] === '.') {
            new_result = new_result.slice(0, new_result.length - 1);
        }
    }
    
    //  최소 길이 조정
    if(new_result.length < 3 && new_result.length > 0){
    while (new_result.length < 3) {
        new_result += new_result[new_result.length - 1];
    }
    }
    
    //빈 문자열인 경우
    if (new_result.length === 0) {
        return 'aaa';
    }
    
    return new_result;
}