//07월 24일

function solution(myString) {
    var answer = '';
    
    for(let i = 0; i < myString.length; i ++){
        if(myString[i] === "a"){
            answer += "A"
        }else if(myString[i] >= 'B' && myString[i] <= 'Z'){
            answer += myString[i].toLowerCase()
        }else{
            answer += myString[i]
        }
    }
    return answer;
}


//짝수 번째 소문자 홀수번째 대문자
function solution(strArr) {
    let tmp = []
    for(let i = 0; i < strArr.length; i ++){
        if(i % 2 === 0) tmp.push(strArr[i].toLowerCase())
        else tmp.push(strArr[i].toUpperCase())
    }
     return tmp;
}

// ===>> map과 삼항연산자를 이용해서 더 쉽게 푸는 방법이 있었음
function solution(strArr) {
     return strArr.map((v,i)=> i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
}

const solution = (myString) => {
    return myString.toLowerCase();
    return myString.toUpperCase();
}

function solution(myString, pat) {
    return myString.toUpperCase().includes(pat.toUpperCase())?1:0 
}

function solution(num_list) {
    let result = 0;
    let tmp = 1;
    for(let i = 0; i < num_list.length; i ++){
        if(num_list.length >= 11) {
            result += num_list[i]
        }
        else {tmp *= num_list[i]}
    }
    return (num_list.length >= 11) ? result : tmp
}


function solution(arr) {
    let tmp = []
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] % 2 === 0 && arr[i] >= 50) {tmp.push(arr[i]/2)}
        else if(arr[i] % 2 !== 0 && arr[i] <= 50) {tmp.push(arr[i]*2)}
        else {tmp.push(arr[i])}
    }
    return tmp
}

function solution(numbers, n) {
    var answer = 0;
    for(let i =0; i < numbers.length; i ++){
        if(answer <= n) answer += numbers[i]
        else break;
    }
    return answer;
}
// 조건문과 반복문을 공부하기 좋은 문제들이었다
// ============================================================