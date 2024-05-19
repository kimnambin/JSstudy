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