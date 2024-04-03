// <특이한 정렬>
function solution(numlist,n) {
    return numlist.sort((a,b) => Math.abs(a-n) - Math.abs(b-n) || b-a);
}

//sort와 Math.abs를 이용하면 풀 수 있는 문제였는데 넘 어려웠다 ㅜㅜㅜ

//<등수매기기>
function solution(score) {
    let avg = score.map(v => (v[0] + v[1])/2) //가장 먼저 스코어의 평균 값 구하기
    let rank = avg.slice().sort(a,b => (b-a)); //랭킹을 매기기 위해 내림차순으로 정렬
    return avg.map(v =>(rank.indexOf(v))+1); // 이제 rank을 다시 정렬 그리고 인덱스는 0부터 시작하므로 +1
}
//등수 매기기는 map ,slice를 자유자재로 사용해야 하는 문제이다 , 앞으로 자주 나온다길래 단단히 외워두었다

//<옹알이(1)>

function solution(babbling) {
    var answer = 0;
    
    for(let i = 0; i < babbling.length; i++){
        if(babbling.replace('aya',' ').replace('ye',' ').replace('woo',' ').replace('ma',' ').trim() === '')
        answer ++
    }
    return answer;
}
//이거는 2개의 문자를 비교하면서 해당하면 제외를 시킨 후 공백을 만들어서 공백의 갯수를 세서 문제를 푼 케이스이다.

//<로그인성공?>

function solution(id_pw, db) {
    
    for(let i = 0 ; i < db.length; i ++){
        if(id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) return "login"
    }

    for(let i = 0 ; i < db.length; i ++){
        if(id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) return "wrong pw"
    }

    return "fail";

}
//이 문제는 다 풀어놓고 for문을 각각 상황마다 나눠서 썼어야 했는데 한번에 쓰려다 오래걸렸다 ㅠㅠ