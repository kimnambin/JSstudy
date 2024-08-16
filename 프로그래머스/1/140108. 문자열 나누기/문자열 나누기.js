function solution(s) {
    var answer = 0;
    let x = s[0]
    let xCNT = 0;
    let oCNT = 0;
    
    for(let i = 0; i < s.length; i ++){
        //x와 s[i]의 나온 횟수 체크
        if(x === s[i]) {
            xCNT ++;
        }else{
            oCNT ++;
        }
        if (xCNT === oCNT){ //그래서 여기서 같다면 answer 이걸 ㅇ올림
            answer++
            
 // =========================-------------
            //이제 다음 x 값 체크
            if(i+1 < s.length){
                x = s[i + 1]
            }
                 xCNT = 0; oCNT = 0; //여긴 초기화 부분
            
        }
    }
     if (xCNT !== oCNT) { //이건 마지막 부분 처리
        answer++;
    }
    return answer;
}