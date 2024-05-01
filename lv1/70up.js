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