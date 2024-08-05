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

//08월 02일

function solution(names) {
    var answer = [];
    for(let i = 0; i < names.length; i+=5){
        answer.push(names[i])
    }
    return answer;
}

function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i < n; i++){
        answer.push(num_list[i])
    }
    return answer;
}

function solution(num_list, n) {
    var answer = [];
    for(let i = n; i < num_list.length; i++){
        answer.push(num_list[i])
    }
    for(let i = 0; i < n; i++){
        answer.push(num_list[i])
    }
    return answer;
}

function solution(num_list, n) {
    num_list.push(...num_list.splice(0,n));
    return num_list
}

// 오늘은 for문을 사용하는 문제가 많았다
// for문은 많이 써서 익숙하기도 하고 코드가 길어지니
// 앞으로는 slice나 while문도 사용해보자!!


function solution(num_list, n) {
    // var answer = [];
    // for(let i = n-1; i < num_list.length; i ++){
    //     answer.push(num_list[i])
    // }
    return num_list.slice(n-1);
    // return answer
}


function solution(num_list) {
    for(let i = 0 ; i < num_list.length; i ++){
        if(num_list[i] < 0) return i
    }
      return -1;
 }

 function solution(start_num, end_num) {
    let tmp = [];
    for(let i = start_num; i >= end_num; i--){
          tmp.push(i)
      }
      return tmp;
  }

  function solution(n, k) {
    var answer = [];
    for(let i = k; i <=n; i+=k){
        answer.push(i)
    }
    return answer;
}

// 오늘도 for문을 사용하는 문제가 많았는데 
// 이번엔 한번 더 꼬아서 i로 시작했다면 이걸 사용하지 못하는 문제가 많았다
// for문에 대해 자만하고 있었던거 같은데 다시 생각하게 된 좋은 하루였던 거 같다

// ===========================================================================================

function solution(my_string, is_prefix) {
    if(my_string[0] !== is_prefix[0]) return 0
    else return my_string.includes(is_prefix) ? 1 : 0 ;
}

// -->> return my_string.startsWith(is_prefix) ? 1 : 0;
// startWith라는 문제가 있는 걸 첨알았다... 반대는 endsWith

function solution(my_string, n) {
    return my_string.slice(0,n);
}

function solution(my_string, n) {
    return my_string.slice(my_string.length-n, my_string.length);
}

function solution(my_strings, parts) {
    var answer = '';
    for(let i =0; i < my_strings.length; i ++){
      answer+= (my_strings[i].slice(parts[i][0], parts[i][1]+1))
    }
    return answer;
}

function solution(my_string, index_list) {
    var answer = '';
        for(let j = 0; j < index_list.length; j ++){
            answer += my_string[index_list[j]]
        }
    
    return answer;
}

function solution(n, control) {
    var answer = n;
    const wsda = {
        "w" : '1',
        "s" : '-1',
        "d" : '10',
        "a" : '-10'
    }
    for(let i =0; i< control.length; i++){
        answer += Number(wsda[control[i]])
    }
    return answer;
}

function solution(num_list) {
    if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
        num_list.push(num_list[num_list.length - 1] - num_list[num_list.length - 2]);
    } else {
        num_list.push(num_list[num_list.length - 1] * 2);
    }
    return num_list;
}

