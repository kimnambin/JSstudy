/*영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}
//replace()함수와 정규표현식 /[]/g 를 처음 알게 된 문제였다


/*문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 
오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요. */

function solution(my_string) {
    var answer = [];
    let str = my_string.replace(/[^\d]/g, ''); //문자열에서 알파벳을 제거

    for(let i = 0; i < str.length; i++){ //문자 -> 숫자로 변환하여 answer에 삽입
        answer.push(parseInt((str[i])));
    }
    answer.sort((a,b) => a-b); //오름차순으로 변경
    
    return answer;
}

//위에서 풀었던 정규표현식과 replace함수를 이용하는 예제였당 여기서는 parseInt()함수도 처음 알 게 되었고
//잊고 있었던 for문 사용을 깨달았다


/*문자열 my_string이 매개변수로 주어집니다. 
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
    var answer = 0;
    //먼저 알파벳 제거하자
    let str = my_string.replace(/[^\d]/g, '');
    
    //문자 -> 숫자로 만들기
    for(let i = 0; i < str.length; i ++){
     answer += parseInt(str[i]);
    }       
    return answer;
}
// 앞서 2문제를 풀어보니 이 문제는 100% 나의 힘으로 풀 수 있었다 ㅎㅎ

/*소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(n) {
    var answer = [];
    let result = 2;

    while(n >1){
        while( n % result === 0){
            answer.push(result);
            n /= result;
        }
        result ++;
    }
    return [...new Set(answer)];
}

// 소인수 분해 문제가 나오면 이제 풀 수 있겠다는 자신감이 들었다 ㅎㅎ
// 솔직히 while문에 대해 자신이 없었는데 조금이나마 자신감을 높였다
// 중복된 수를 제거하는 배열에 대해 [...new Set()]이랑 a.includes(b)를 처음 알게 되었당