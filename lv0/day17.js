/* 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 
return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.*/

function solution(num , k) {
    var answer = Sting(num);
    for(let i = 0; i < num.length; i ++){
        if(answer[i] === String(k)){
            return i +1;
        }
    }
    return -1;
}

//되게 쉬운 문제였는데 k를 문자열로 바꾸지 않은것과 -1을 if문 안에 넣은 실수를 했던 문제였다 ㅠㅠ

/*정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(n,numlist) {
    var answer = [];
    for(let i = 0; i < numlist.length; i ++){
        if(numlist[i] % n === 0 ){
            answer.push(numlist[i]);
        }
    }
    return answer;
}

//이 문제도 되게 쉬운 문제였는데 배수라고 해서 n * i를 생각했는데 알고보니 나눠서 나머지가 0을 알아내면 더 쉬운 거였는데 이걸 몰랐다 ㅠㅠㅠ

/*정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요 */

function solution(n) {
    var answer = String(n);
    let result = 0;
    for (let i = 0; i < n.length; i++){
        result += Number(answer[i]);
    }
    return result;
}

// 이 문제는 문자 -> 숫자 이렇게 바꿔서 푸는 문제였다.

/*덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 
수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(quiz) {
    var answer = [];

    for(let i = 0; i < quiz.length; i ++){
    let newquiz = quiz[i].split(' '); //인덱스마다 계산을 진행해야 하므로 [i]
    let x = Number(newquiz[0]);  //첫번째 숫자값
    let y = Number(newquiz[2]);
    let z = Number(newquiz[4]);
    let op = newquiz[1]; //여기가 연산자 부분

    let result = false; // 여기가 인덱스값 = 실제값이랑 일치하는 지 확인하는 부분

    if ( op === "+"){
        if( x + y === z){
            result = true;
        }
    }
    else if( op === "-"){
        if( x - y ===z){
            result = true;
        }
    }
    
    if(result){
        answer.push("o");
    }else{
        answer.push("x");
    }
    }
    return answer;
}

//이 문제는 너무 어려웠다 ㅠㅠㅠ 지금도 코드가 길긴 하지만 처음 생각한 거보다 짧게 푸는 코드가 있었다ㅓ
//저번에도 비슷한 문제가 있었는데 이번엔 true , false를 검사하는 것까지 추가되서 더 어려웠던 거 같다 ㅠㅠ
//글구 자꾸 x,y,z에서 숫자로 안바꾸는 실수까지....