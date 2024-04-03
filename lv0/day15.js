/*영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요. */

function solution(numbers) {
    const numlist = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ] ;

    for (let i =0; i < numlist.length; i ++){
        numbers = numbers.split(numlist[i]).join(i);
    }
    return Number(answer);
}

// 이문제 넘 어려웠다 ㅠㅠㅠ 계속 numbers에서만 생각했는데 정답은 리스트를 먼저 나열한 후 다시 numbers를 배열하는 방법이었다 ㅠㅠㅠ

/*문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요. */

function solution(my_string , num1, num2 ) {
    var answer = my_string.split('');
    [my_string[num1] , my_string[num2]]=[my_string[num2] , my_string[num1]];
    return answer.join('');
}
//이것도 넘 어렵게 생각했다 ㅠㅠㅠ 문자를 새로 만들어야 하니 split로 배열로 만든 후 num1과 num2를 바꿔준 후 join으로 다시 만드는 문제였다
// [a,b] = [b,a] 라는 정말 쉬운 변경 방법이 있었지 하고 깨닫는 문제였다

/*문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 
정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다. */

function solution(s) {
    var answer = [];

    for (let i = 0; i < s.length; i ++){
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            //처음 나온 문자와 마지막에 나온 문자를 비교해서 위치가 같다면 answer 배열에 푸시
            //문자가 한번이어야만 위치가 같자나
            answer.push(s[i]);
        }
    }
    return answer.sort().join('');
}

//이 문제는 s 문자열에서 글자를 하나하나 꺼내서 비교를 한 후 다시 배열을 만드는 문제인건 알았는데 하는 방법을 몰랐다 ㅠㅠ
//indexOf() , lastIndexOf() 함수를 처음 알았고 숫자 말고 문자를 순서대로 배열할 땐 sort()만 붙이면 된다는 걸 알게 된 문제였다

/*정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(n) {
    var answer = [];
    
    for (let i = 0; i <= n; i++){
        if(n % i === 0){
            answer.push(i);
            
        }
    }
    return answer;
}

// 이문제는 쉽기도 했지만 내 힘으로 100% 푼 문제라 기분이 좋다 ㅎㅎ