function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0; // 맞춘 번호의 개수
    let 영갯수 = 0; // 0의 개수

    const 순위배열 = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6 
    };


    for (let i = 0; i < lottos.length; i++) {
        //0갯수 세기
        if (lottos[i] === 0) {
            영갯수++;
        } 
        //일치하는 번호 세기
        else if (win_nums.includes(lottos[i])) {
            cnt++;
        }
    }

 
    answer.push(순위배열[cnt + 영갯수])
    answer.push(순위배열[cnt]);

    return answer;
}
