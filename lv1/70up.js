// <크기가 작은 부분 문자열>
function solution(t,p) {
    var answer = 0;

    for(let i =0; i < t.length; i++){
        let a = t.substring(i, i+ p.length)
        if(a.length === p.length && a <= Number(p)) answer ++;
    }
    return answer;
}

//코드로만 보면 안어려울 수 있는데 상당히 어려웟다 ㅠㅠㅠ 나는 순열 공식을 이용해야 할줄 알았는데
//for문과 substring으로 손쉽게 풀 수 있는 문제였다

//<가장 가까운 같은 글자>
function solution(s) {
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        let check = false; 
        
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                answer.push(i - j); 
                check = true; 
                break; 
            }
        }
        
        if (!check) {
            answer.push(-1); 
        }
    }
    
    return answer;
}


//<푸드파이터>
function solution(food) {
    var answer = '';

    
    for(let i = 1; i < food.length; i ++){
         answer += String(i).repeat(Math.floor(food[i]/2))
        
    }
    return answer + "0" + answer.split('').reverse().join('');
}

//그렇게 어렵지 않은 문제였는데 사실 문제를 이해하는데도 오래 걸렸다 ㅠㅠ
//그리고 repeat와 i를 문자열로 바꾼다는 점만 알았으면 쉽게 풀었는데 그걸 몰라서 더 오래걸렸다 ㅠㅠ

//최대공약수와 최소공배수
function solution(n, m) {
    var answer = [];
    for(let i = n; i >= 1; i --){
         if(n % i === 0 && m % i === 0) 
             answer.push( i, (n/i * m/i * i))
    }

    return answer.slice(0,3);
}
//살짝 야매로 풀긴했지만 풀긴 품 ㅋㅋㅋ

//3진법 뒤집기
function solution(n) {
    let reversedBase3 = ''; // 3진수를 저장할 변수
  
    // 먼저 3진수 구하기
    while (n > 0) {
      let remainder = n % 3; // 나머지 값
      reversedBase3 += remainder;
      n = Math.floor(n / 3);
    }
  
    let decimal = 0;
  
    // 3진수를 10진수로 변환
    for (let i = 0; i < reversedBase3.length; i++) {
      decimal = decimal * 3 + parseInt(reversedBase3[i]);
    }
  
    return decimal;
  }
  //3진수 만드는법 2진수 만드는 법을 알 수 있었다
  //문자열로 만들고 숫자형으로 다시 바꿔야 하는데 그걸 까먹어서 애좀 먹었다 ㅠㅠ

  //이상한 문자 만들기
  function solution(s) {
    let answer = '';
    let words = s.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if (i < words.length -1) {
            answer += ' ';
        }
    }
    return answer;
}
//split 함수를 이용해서 공백을 기준으로 단어들을 나열한 후
//짝홀번째 대문자 소문자로 바꿔주는 문제인데 나중에 다시 공백을 추가할때
//마지막 단어가 아니라면 공백을 추가한다는  if (i < words.length -1) 이거는 생각도 못했다  ㅠㅠ

//예산
function solution(d, budget) {
    var answer = 0;
    let tmp = 0;
    let newd = d.sort((a,b)=> a-b);
    
    for(let i =0; i < newd.length; i ++){
         if(budget >= tmp + newd[i]) {
             tmp += newd[i]
            answer ++;
        }
    }
    return answer;
}

//되게 쉬운 문제였는데 sort()이렇게 했다가 틀린 문제였다 ㅠㅠ
//앞으로는 걍 풀로 다 써야겠다....

//삼총사
function solution(number) {
    var answer = 0;
    
    for(let i = 0; i < number.length-2; i ++){ //왼쪽 부터 살펴볼 것
        for(let j = i+1; j < number.length-1; j ++){ //왼+1부터
            for(let k = j+1; k < number.length; k ++){
                if(number[i] +  number[j] + number[k] === 0) answer ++
            }
        }
    }
    return answer;
}
//맨 처음 살피는 수 (for문에서 i) 범위를 length-2로 했어야 했는데 -3으로 해서 오래걸렸다 ㅠㅠ