/*숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 
이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 
머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요. */

function solution(s) {
    var answer = 0; //이게 정답
    let numZ = 0; //Z가 나왔을 시
    let result = s.split(' '); // 문자열에서 공백 제거

    for(let i = 0; i < result.length; i ++){
        if(result[i] === "Z"){
            answer -= numZ;
        }else{
            const num = parseInt(result[i]);
            answer += num;
            numZ = num;
        }
    }

    return answer;
}

// split() , for , parseInt를 사용해야 하는 줄은 알았지만 조합을 잘못했던 문제인거 같다 ㅠㅠ
// result[i] 이부분에서 [i]의 중요성도 알게 되었다

/*문자열 배열 strlist가 매개변수로 주어집니다. 
strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요. */

function solution(strlist) {
    var answer = [];
    
    for(let i = 0; i < strlist.length; i ++){
        answer.push(strlist[i].length);
    }
    
    return answer;
}
//문제를 보자마자 배열을 하나씩 꺼내서 길이를 잰 후 새로운 배열을 만들면 된다고 생각했고
//문제를 맞쳤다.

function solution(strlist) {
    return strlist.map((el) => el.length)
}
//다른 분의 풀이를 보고 나는 4~5줄 걸린걸 map을 이용해서 한줄로도 풀 수 있다는 것을 알았다.

/*문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 
하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string) {
    return [...new Set(my_string)].join('');
}
//예전에 문자열에서 중복제거하는 방법으로 기록해둔  함수였는데 까먹고 있었다

/*선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요. */

function solution(sides) {
    var answer = sides.sort((a,b) => b-a);;
    
    if(sides[0] < sides[1] + sides[2]){
        return 1;
    }else{
         return 2;
    }
}
// sort를 이용해서 배열을 내림차순으로 정렬한 후 if else를 이용해서 100% 나의 힘으로 문제를 풀었다.
function solution(sides) {
    var answer = sides.sort((a,b) => b-a);;
    return sides[0] < sides[1] + sides[2] ? 1:2;
}
//하지만 다른분의 풀이를 보니 if else를 삼항조건연산자로 한줄로 문제를 푸셨다. 
//나도 문제를 풀면서 아는 부분이니 앞으로 이런 문제가 나온다면 적용해 봐야겠다.

/*정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요. */

function solution(array,n) {
    array.sort((a,b) => Math.abs(n -a) - Math.abs(n - b) || a-b)
    return array[0];
}

//첨엔 for문을 사용해서 배열을 하나하나 꺼내서 푸는 문제인줄 알았는데 그러게 되면 가장 작은 수는 찾을 수 있지만 인덱스는 찾을 수 없는 문제가 있었다
//그래서 다른 분의 풀이를 보니 sort를 이용해서 오름차순 배열을 하는데 Math.abs()를 이용하면 가장 가까운 수를 찾을 수 있다는 것을 첨 알게 되었다.