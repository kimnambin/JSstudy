/*정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 
return 하도록 solution 함수를 완성해보세요. */

function solution(array, n) {
    var answer = 0;
    
    for(let i = 0; i < array.length; i ++){
        if(array[i] === n){
            answer ++;
        }
    }
    return answer;
}
//문제도 쉽게 풀고 filter 연습도 할 수 있었던 문제였당
//arrat.filter(v=> v===n ).length;

/*어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 
t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요. */
function solution(n , t) {
    var answer = n* Math.pow(2,t);
    return answer;
}
// 이문제는 수학공식을 까먹어서 생각보다 애좀 먹었다 ㅠㅠㅠ
// 찾아보니  n + 2^k라는 것을 알게 되었고 제곱을 해주는함수인 Math.pow()를 사용해서 풀 수 있었다 
// 근데 소름 돋았던 게 << 이렇게 해줘도 제곱이 된다는 사실이었다 ㅜ.ㅜ

/*머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 
머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 
머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요. */

function solution(array, height) {
    return  array.filter(v => v > height).length;
 }
 //이 문제는 보자마자 filter를 쓰는 문제인것을 알았고 처음으로 filter을 써서 맞쳤다 ㅎㅎ

//  ==============================================
// 자바스크립트 복습하기 (정답률 80%대)

function solution(a, b, flag) {
    return (flag === true ? (a)+(b) : (a)-(b));
}

function solution(n) {
    return String(n);
}

function solution(n_str) {
    return Number(n_str);
}

function solution(num_str) {
    var answer = num_str.split('');
    let cnt = 0;
    for(let i = 0; i < answer.length; i++) {
        cnt += Number(answer[i]);
    }
    return cnt;
}

function solution(flo) {
    return Math.floor(flo);
}

function solution(num_list) {
    var answer = [];
    let newArr =  num_list.sort((a,b) => a-b);
    
    for(let i =5; i < newArr.length; i ++){
        answer.push(newArr[i])
    }
    return answer;
}

// ==>> slice로 코드 한줄만에 풀기

function solution(num_list) {
    return num_list.sort((a,b)=>a-b).slice(5);
}

function solution(num_list) {
    return num_list.sort((a,b) => a-b).slice(0,5);
}


function solution(arr, n) {
    var answer = [];
    let arrLength = arr.length;
    
    if(arrLength % 2 === 0){
        for(let j = 0; j < arr.length; j +=2){
               answer.splice(j, 0 ,arr[j]) 
        }
        for(let i = 1; i < arr.length; i +=2){
               answer.splice(i, 0 ,arr[i] + n) 
        }
    }
  
    else{
        for(let i = 0; i < arr.length; i +=2){
               answer.splice(i,0,arr[i] + n) 
        }
        for(let j = 1; j < arr.length; j +=2){
               answer.splice(j,0,arr[j]) 
        }
    }
    return answer;
}


function solution(arr1, arr2) {
    let cnt1 = 0;
    let cnt2 = 0;
    if(arr1.length === arr2.length){
      for(let i = 0; i < arr1.length; i ++){
          cnt1 += arr1[i]
          cnt2 += arr2[i]
      }
          if(cnt1 === cnt2) return 0
          if(cnt1 > cnt2) return 1
          else return -1
       
    }
    else {return arr1.length > arr2.length ? 1 : -1;
}}

// ===========================================
function solution(arr) {
    var answer = [];

    for(const num of arr){
        for(let i = 0; i < num; i ++){
            answer.push(num)
        }
    }
    return answer;
}

function solution(rny_string) {
    var answer = rny_string.split('');
    let result = ''
    
    for(let i = 0; i < answer.length ; i++){
        if(answer[i] === 'm')  result += 'rn'
        else result += answer[i]   
    }
    return result;
}

function solution(myString, pat) {
    var answer = '';
    
    for(let i = 0; i < myString.length; i++){
        if(myString[i] == 'A') answer += 'B'
        else answer += 'A'
    }
    
        return answer.includes(pat) ? 1:0;
    
}