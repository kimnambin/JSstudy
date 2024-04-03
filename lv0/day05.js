/* 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 
머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 
배열을 return 하도록 solution 함수를 완성해보세요.*/
function solution(money) {
    return [Math.floor(money/5500) , money-(Math.floor(money/5500)*5500)];
}


/* 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 
나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.*/
function solution(age) {
    return 2022-age+1;
}


/*정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. 
num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요. */
function solution(num_list) {
    return num_list.reverse();
}



/* 문자열 my_string이 매개변수로 주어집니다. 
my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요. */
function solution(my_string) {
    let l = my_string.length; //맨 처음 문자열의 길이를 재야함
    let reversmy = ''; // 그다음 거꾸로 뒤집은 문자열 함수
    for(let i = 1; i<=l; i++){
        reversmy += my_string[l-i]; // for 함수를 이용해서 문자열을 하나씩 꺼내고 뒤집은 
    }
    return reversmy;
}

// 문자열을 출력할 때 +=을 사용해야 하는 지 첨 알게됐음


/*정수가 담긴 리스트 num_list가 주어질 때, 
num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 
solution 함수를 완성해보세요. */
function solution(num_list) {
    let s = 0; //짝수의 개수
    let n = 0; //홀수의 개수
    
    for (let i =0; i < num_list.length; i++){
        if (num_list[i] % 2 === 0){
            s ++;
        }
        else{
            n ++
        }
    }
    return [s , n];
}
