/*머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 
박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요. */

function solution(order) {
    var answer = order.toString(); //order을 문자로 변경
    let cnt = 0; //369가 포함될 시 카운트 추가

    for(let i =0; i < answer.length; i++){ //문자열 길이 만큼 반복
        let num = parseInt(answer[i]); //각 문자열을 비교하기 위함
            if(num === 3|| num === 6 || num === 9){ // 각 자리에서 369 포함시 카운트 증가시킴
                    cnt ++;
            }
    }
    return cnt;
}
//다르게 푸는 방법도 있지만 문자 -> 숫자 , 숫자 -> 문자를 모두 사용하는 문제라 어려웠다
// [..order.toString().matchAll(/[3|6|9]/g)].length; 이렇게 푸는 걸 보고 현타가 왔다 ㅠㅠ 난 아직 한줄로 나타내는 건 어렵다 ㅠㅠ

/*군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요. */

function solution(cipher, code) {
    var answer = 0;
    let result = '';
    
    for(let i = 1; i * code  <= cipher.length; i ++){
        answer = code*i ;
         result += cipher[answer-1];
    }
    return result;
}

//시간이 많이 걸리긴 했지만 내 힘으로 100% 푼 문제이다.
//처음엔 for문으로 i,j를 할 생각이었지만 생각해보니 그럴 필요가 없다는 것을 알았고 하다보니 되었다.
//솔직히 맞히긴 했지만 for문에서 0했다 1 했다 <, <= 등등 수도 없이 바꿨기에 아쉬운 문제이다

/*문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
    var answer = '';

    for(let i = 0; i < my_string.length; i++){
        if(/[qwertyuiopasdfghjklzxcvbnm]/.test(my_string[i])){
            answer += my_string.toUpperCase();
        }else{
            answer += my_string.toLowerCase();
        }
    }
    return answer;
}

//대소문자를 변경하는 함수인 toLowerCase , toUpperCase를 알 게 된 문제였따.
//솔직히 쉬운 문제였는데 자꾸 문자열[i]이걸 까먹는 실수를 한다 ㅠㅠㅠ 정신 차리자