/*문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요. */

function solution(str1, str2) {
    if(str1.includes(str2)){
        return 1;
    }else{
        return 2;
    }
}
// 겁나 쉬운 문제였는데 괜히 filter를 써서 풀려다가 오래걸렸다 ㅠㅠ

/*어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 
solution 함수를 완성해주세요. */

function solution(n) {
    const a = Math.sqrt(n);
    
    if(n % a === 0){
        return 1;
    }else{
        return 2;
    }
}
//첨에 제곱수는 똑같은 수 끼리 곱한 경우만 그런줄 알고 if에 n*n을 뒀는데 80점으로 틀리길래
//아니란걸 깨닫고 n % a === 0 으로 다시 푼 문제이다

/*영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 
모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. */

function solution(my_string) {
    var answer = my_string.toLowerCase();
    return answer.split('').sort().join('');
}
//이 문제는 'abcd' 이런식으로 '한' 문자이기 때문에 split('')를 이용해서 풀었어야 했는데 그것을 망각하고 안쓰다가 오래걸린 문제이다
// + toLowerCase()함수도 까먹었었는데 이제 기억할 것이다