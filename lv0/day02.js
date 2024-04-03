//정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
// [1,2,3,4,5] -> [2,4,6,8,10]

//1. numbers(배열)에서 원소를 꺼내야 함 
//2. numbers에서 원소를 꺼내 2배를 한 후 새 배열에 넣기

function solution(numbers) {
    var answer = []; //이게 처음 담기는 배열
    
    for (let cnt = 0; cnt < numbers.length; cnt = cnt+1){
        answer.push(numbers[cnt]*2)
    }
    return answer;
}


//정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
// 3 , 2 -> 1    10 , 5 -> 0
function solution2(num1,num2){
    return num1 % num2;
}


//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
//[9,-1,0] -> 0 

// 1.배열을 정렬하기  array
// 2.배열의 길이 구하기 cnt
// 3.중앙값 출력하기  answer

function soltuion3(array){
    return array.sort((a,b) => a-b)[map.floor(array.length/2)];
}
