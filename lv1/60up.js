//포켓몬
function solution(nums) {
    var answer = [...new Set(nums)];
    let newnum = nums.length/2
    if(newnum >= answer.length) return answer.length;
    else return newnum;
}
//이제 정답률 60%대로 가서 긴장했는데 잘풀려서 기분이 좋았다 ㅎㅎ

//2016년
function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var answer = new Date(2016,a-1,b);
    let result = answer.getDay();
    return days[result];
}
//이 문제는 어렵진 않았는데 date() 객체를 올만에 사용해서 오래 걸렸다ㅠ

//모의고사
function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var answer = new Date(2016,a-1,b);
    let result = answer.getDay();
    return days[result];
}
//이 문제는 어렵진 않았는데 date() 객체를 올만에 사용해서 오래 걸렸다ㅠ

//모의고사
function solution(answers) {
    var answer = [];
    let fir = [1, 2, 3, 4, 5];
    let sec = [2, 1, 2, 3, 2, 4, 2, 5 ];
    let thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt01 = 0;
    let cnt02 = 0;
    let cnt03 = 0;
    
    for(let i = 0; i < answers.length; i ++){
        if(answers[i] === fir[i % fir.length]) cnt01++
        if(answers[i] === sec[i % sec.length]) cnt02++
        if(answers[i] === thr[i % thr.length]) cnt03++
    }

    const maxstd = Math.max(cnt01 ,cnt02 ,cnt03)
    if (maxstd === cnt01) answer.push(1)
        if (maxstd === cnt02) answer.push(2)
            if (maxstd === cnt03) answer.push(3)

                return answer;
}
// i% fir.length 를 사용하면 계속해서 같은 배열을 순환한다는 것을 첨 알게 된 문제였다
// 더 짧게 푼 사람도 있을줄 알았는데 대부분 다 비슷한 거 같다