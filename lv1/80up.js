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

//<자릿수 더하기>
function solution(n){
    var answer = String(n).split('');
    let cnt = [];
    let sum = 0;
    for(let i =0; i < answer.length; i ++){
        cnt.push(Number(answer[i]))
    }
    for(let k =0; k < cnt.length; k ++){
        sum += cnt[k]
    }
    return sum;
}
//문제는 풀었는데 넘 더럽게(?) 푼거 같다 ㅠㅠ
//문자열 -> 숫자열로 cnt에 푸시 -> cnt에서 합을 sum에 넣기 이런식으로 풀었는데
function solution(n)
{
    var a = (n + '').split('');
    var b = 0;
    for(var i = 0; i < a.length; ++i) {
        b += parseInt(a[i]);
    }
    return b;
}
//내 풀이에 더 짧은 예시이다 그냥 새로운 배열에 넣지 말고 내 기준 sum에 숫자로 바꾸고 바로 += 했으면 됐는데 바보 같이 어렵게 풀었다 ㅠㅠ
//요즘 시험기간이라 코테는 못했는데 그사이에 감을 조금 잃은 거 같다 ㅠㅠ