//<문자열 내 p와 y의 개수>

function solution(s){
    
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
//원래 다 소문자로 바꾼 후 p따로 y따로 문자열에 넣어서 값을 비교해서 풀었는데 이렇게 split를 사용하면
//더 쉽게 풀 수 있었다.


//<문자열을 정수로 바꾸기>
function solution(s) {
    return Number(s);
}
//아무리 연습 문제지만 이게 lv1이라는게....

//<약수의 합>
function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i ++){
        if(n % i === 0) answer +=i
    }
    return answer;
}