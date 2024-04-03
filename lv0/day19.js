/* 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 
7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.*/

function solution(array) {
    return array.join('').split('7').length-1;
}
// 이 문제는 나의 고정관념을 깨주는 문제였다 일단 문제는 문자열로 바꾼 후 7로 쪼개서 길이를 세는 걸로 문제를 푼 것이다
// 그동안 split()함수가 먼저 오고 join()은 마지막에 와야 한다고만 생각했는데 그런 고정관념을 확깨버렸다
// 그리고 문자열로 바꿀 때 +=을 통해서만 할 수 있는 줄 알았는데 join('')으로 손쉽게 할 수 있다는 것도 알 게 된 문제였다


/*문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(my_str , n) {
    var answer = [];
    let result = my_str.split('')

    while( 0 < result.length) {
        push(answer.splice(0,n).join(''))
    }

    return answer;
}