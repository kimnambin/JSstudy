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

//자연수 뒤집에 배열로 만들기
function solution(n) {
    return String(n).split('').map(number).reverse();
}

//가운데 글자 가져오기
function solution(s) {
    var answer = '';
    if(s.length % 2 === 0){
        answer += s[Math.floor(s.length /2)-1];
        answer += s[Math.floor(s.length /2)];
    }else {
        answer += s[Math.floor(s.length /2)];
    }
    return answer;
}

//핸드폰 번호 가리기
function solution(phone_number) {
    var answer = '';
    for(let i =0; i < phone_number.length-4; i ++){
        answer += '*'
    }
    return answer + phone_number.substr(phone_number.length-4)
}

//콜라츠 추측
function solution(num) {
    var cnt = 0;
    
    while(num !== 1){
    if(num % 2 === 0){
        num = num / 2;
        cnt ++;
    }else{
        num = num * 3 + 1;
        cnt ++;
    }
        if(cnt >500) return -1;
    }
    
    return cnt;
}

//나누어 떨어지는 숫자 배열
function solution(arr,divisor){
    var answer = arr.filter (v => v % divisor === 0); //0으로 나누어 떨어지는 경우 필터링!!
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b); 
    //만약 길이가 0 (그니까 나누어 떨어지는 게 없는 경우) 이면 [-1] 그렇지 않으면 올림차순으로 정렬하여 출력
}

//없는 숫자 더하기
function solution(numbers) {
    return 45 - numbers.reduce((a,b) => a+b,0);
}
//없는 숫자를 찾아서 더해서 문제를 풀어도 되지만 1부터 9까지의 합에서 현재 숫자의 합을 빼는 걸로 문제를 풀었다 ㅎㅎ
//난 for문을 이용해서 문제를 풀었지만 reduce 함수를 사용해도 풀 수 있다는 것을 알게 되었다.

//음양 더하기
function solution(absolutes, signs) {
let sum = 0;
for (let i = 0; i <absolutes.length; i ++){
    if (signs[i]) sum += absolutes[i];
    else sum -= absolutes[i];
}
    return sum;
}

//서울에서 김서방 찾기
function solution(seoul) {
    let tmp = 0;
    for(let i =0; i < seoul.length; i ++){
        if (seoul[i] === "Kim") tmp += i
    }
    return `김서방은 ${tmp}에 있다`;
}

//두 정수 사이의 합
function solution(a, b) {
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    let sum =0;

    for(let i =min; i < max; i ++){
        sum += i;
    }
    return sum;
}

//나머지가 1이 되는 수 찾기
function solution(n) {
    for(let i = 2; i <= n; i ++){
        if(n % i === 1) return i
    }
}

// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    let a = x; //누적되지 않고 더하기 위함
    while(answer.length !== n){
        answer.push(x);
        x += a;
    }
    return answer;
}

//하샤드 수
function solution(x) {
    let sum =0;
    var answer = String(x).split('');
    for(let i =0; i < answer.length; i ++){
        sum += Number(answer[i])
    }
    
    if( x % sum === 0 ) return true;
    else return false;
}

//평균 구하기
function solution(arr) {
    var answer = 0;
    for(let i =0; i < arr.length; i ++){
        answer += arr[i];
    }
    return answer/arr.length;
}

//짝수와 홀수
function solution(num) {
    return num % 2 ===0 ? "Even" : "Odd";
}

//정수 제곱근 판별
function solution(n) {
    return (n % Math.sqrt(n)===0) ? (Math.sqrt(n)+1) * (Math.sqrt(n)+1) : -1;
}

//정수 내림차순으로 배치하기
function solution(n) {
    return Number(String(n).split('').sort((a,b)=> b-a).join(""));
}

//제일 작은 수 제거하기
function solution(arr) {
    if(arr.length === 1) return [-1]
    let min = arr.indexOf(Math.min(...arr));
    return arr.filter((_, v)=> v !== min);
}
//쉽게 풀릴줄 알았는데 생각보다 쉽지 않았다 ㅠㅠ

//내적
function solution(a, b) {
    var answer = 0;
    
    for(let i =0; i < a.length; i ++){
        answer += a[i] * b[i];
    }
    return answer;
}

//약수의 개수와 덧셈
function solution(left, right) {
    var answer = 0;
    
    
    for(let i = left; i <=right; i ++){
        if(i % Math.sqrt(i) === 0){
            answer += (i * -1)
        }else{
            answer += i
        }
    }
    return answer;
}
//첨엔 약수의 갯수를 다 구해야 하나 했는데 제곱인 수이면 무조건 홀수의 약수갯수를 가진다는것
//알았고 문제를 풀 수 있었다 ㅎㅎ

//문자열 내림차순으로 배치하기
function solution(s) {
    return s.split('').sort().reverse().join('');
}
//겁나 쉬운 문제였는데 넘 어렵게 생각했다 ㅠ.ㅠ

//부족한 금액 계산하기
function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i ++){
        answer += (price * i)
    }

    if(answer > money ) return answer-money;
    else return 0;
}

//문자열 다루기 기본
function solution(s) {
    return !isNaN(Number(s)) === true && s.length === 4 || s.length === 6
    }
//정규 표현식이나 !isNaN을 사용해서 숫자인지 판별한 후 문제를 푸는 방식이었다

//행렬의 덧셈
function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i ++){
        for(let j =0; j < arr1[0].length; j ++){
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}
//거의 다 풀어놓고 못 푼 문제였다 ㅠㅠ
//일단 나는 이걸 먼저 for문으로 사용했는데  arr1[0].length; 이게 나중에 왔어야 했고
// [1,2] 이런식으로 넣으려면 answer[i][j] = arr1[i][j] + arr2[i][j] 이런식으로 할수도 있구나 하고 첨 알았덩