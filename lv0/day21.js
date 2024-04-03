/*문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. 
my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
    var answer = 0;
    let num = my_string.match(/\d+/g);
                                

    if(num){
        for(let i =0; i < num.length; i++){
            answer += Number(num[i])
        }
    }
    return answer;
}

//숫자를 나타내는 방법이 /\d+/g 가 있다는 것을 알았고 for 위에 if를 쓸 수 있다는 것을 다시 한번 깨달았다

/*안전지대 */
function solution(board) {
    //위험 지대 확인용
    const dx = [1,0,-1,0,1,1,-1,-1]
    const dy = [0,1,0,-1,1,-1,1,-1]

    //보드의 길이
    const n = board.length;

    //보드의 총길이
    let maxboard = n * n;
    
    //지뢰가 있는 곳
    let ch = [];

    //이제 모든 칸 확인용
    for(let i =0; i < n; i++){
        for(let j =0; j < n; j++){
            if(board[i][j] === 1){
                //이게 지뢰를 발견한 경우
                ch.push([i,j]);
                maxboard --; //지뢰가 있는 곳을 넣어줌과 동시에 총 보드에서는 마이너스
            }
        }
    }
    if(maxboard === 0 ) return 0; //안전지대가 1도 없는 경우

    ch.forEach((v)=>{
        for(let k =0; k <8; k ++){
            const nx = v[0] + dx[k];
            const ny = v[1] + dy[k];

            if(nx >=0 && ny >=0 && nx < n && ny < n && board[nx][ny]=== 0){
                board[nx][ny] = 1;
                maxboard --;
            }
        }
    })
    return maxboard;
}

//다항식 문제가 젤 어려운줄 알았는데 더 한 놈이 있었다...ㅜㅜ
//이건 뭐 현재 지뢰위치 , 총 보드판 , 위아래 ,대각선 등등 신경써야 할 게 넘 많아서 너무 어려웠다 ㅠㅠㅠ
// 솔직히 2번까지도 이해가 안됐는데 계속 보고 쓰다 보니 이해는 됐다....

//삼각형의 완성 조건
function solution(sides) {
    var answer = 0;
    let or = sides.sort((a, b) => b - a);  // [0]을 가장 큰 수로 만듦
    let cnt = 0;
    
    // 일단 모르는 수가 가장 긴 변일 경우
    for (let i = or[0] + 1; i < or[0] + or[1]; i++) {
        answer++;
    }
    
    // 가장 긴 변이 [0]일 경우
    for (let i = or[0]-or[1]+1; i <= or[0]; i++) {
            cnt++;
        
    }
    
    return answer + cnt;
}
//이 문제는 어렵지 않은 문제인데 주어진 길이 중 가장 긴 변일때 초기값이랑 for문을 쓸 때 i,j를 쓰려고 해서 오래걸렸다 ㅠㅠㅠ
//그리고 삼각형의 공식 중 가장긴변 - 나머지 변 +1 을 하면 나머지 길이인것도 알았다

//외계어 사전
function solution(spell, dic) {
    var answer = [];
    
    for(let i = 0 ; i < dic.length; i++){
        let newdic = dic[i].split('').sort().join([])
        answer.push(newdic);

    }
    
    //let newanswer = answer.sort()
    let newspell = spell.sort().join('');
    //console.log(newspell , answer)
    
    for(let j = 0; j < answer.length; j ++){
            if (newspell === answer[j]){
                return 1;
    }
}

return 2;
    
}
//하... 이문제는 마지막에 return2를 for문 밖에 뒀어야 했는데 그러지 않아서 오래 걸렸다 ㅠㅠ