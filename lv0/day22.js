// <3의 저주>
function solution(n) {
    var answer = 0;

    //3이랑 3의 배수가 포함되는 지 체크하는 과정
    const check = (k) => {
        const num = String(k).split('');
        if(k % 3 ===0 || num.includes('3')){
            answer ++
            check(answer);
        }
    }

    //반복문
    for(let i = 0; i < n; i ++){
        answer ++;
        check(answer);
    }
    return answer;
}

//<평행>
function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
 
 if ((y1 - y2) / (x1-x2) === (y3 -y4) /(x3 -x4)) return 1;
 
 if ((y1 - y3) / (x1-x3) === (y2 -y4) /(x2 -x4)) return 1;
 
 if ((y1 - y4) / (x1-x4) === (y2 -y3) /(x2 -x3)) return 1;
 
 return 0;
 
 }

 //첨엔 두 점 사이의 거리가 같으면 평행 하는줄 알았는데 평행하려면 기울기가 같아야 한다는 것을
 //알았고 기울기를 구하는 공식으로 했는데 그래도 틀리다가 결국 리서치를 통해 해결 할 수 있었다...

 // <겹치는 선분의 길이>
 function solution(lines) {
    var answer = Array(200).fill(0); 

    for(let i =0; i < lines.length; i ++){
        for(let j=lines[i][0]; j < lines[i][1]; j++){
            answer(j +100) +=1;
        }
    }
    return answer.filter(v => v >1);
}

//이 문제는 어떻게 풀어야 하는지는 알았지만 코드로 구현을 하지 못해서 어려웠던 문제였다 ㅠㅠ 나중에 알고보니
//0레벨에서 3번째로 어려운 문제였다구 ㅠㅠ
//내가 풀고자 했던 게 0,2 이면 0,1,2 이걸 나타내고 싶었는데 for문 2개를 이용해서 let j=lines[i][0]; j < lines[i][1];이렇게 나타내는 것이었다
//또한 평소 쓰지 않던 fill를 사용해야 했던 문제였다

//<유한소수 판별하기>
function solution(a,b) {
    let answer = 1; //최대 공약수 판별을 위함

    for(let i =1; i < Math.min(a,b); i ++){
        if ( a % i === 0 && b % i === 0) n = i; //a와 b를 동시에 나누어 떨어지게 하는 수 n
    }

    b /= n; //아까 위해서 구했던 최대 공약수를 b에!!

    while (b % 2 === 0) b /=2;
    while (b % 5 === 0) b /=5;
    //분모가 2와 5만을 소인수로 가져야 하니 검사하는 과정

    return b === 1 ? 1:2; //1도 소수로 포함되니 b===1로!!
}

//이 문제는 기약분수로 구할 때 b/=n 이런 과정을 안해서 틀렸다 ㅠㅠ 79.2...
// 기약분수 , 최대 공약수 문제를 종종 풀었었는데 이 문제를 풀지 못해서 아쉬웟당