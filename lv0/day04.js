/*머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요. */

function solution(n){
    var answer = 0;
    let pizza = 1;
    
    while(true){
        if(pizza * 6 % n === 0){
           return pizza;
        }
        pizza = pizza +1;
    }
    return answer;
}
// 피자 1판당 6조각을 모두 동일한 조각 수 대로 먹어야 한다 -> 피자는 6의 배수 (6으로 나누어떨어지는 수)가 필요
// while문을 사용해서 피자 = 1부터 시작해서 6으로 나누어 떨어지는 수를 찾아냄 (떨어지지 않는다면 1씩 추가해서 찾아냄)


/*머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 
피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요. */


function solution(slice, n) {  
    return Math.ceil(n/slice);
}


/*정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요. */

// 이건 보자마자 배열들의 합 / 배열의 수 인게 보였음
function solution(numbers) {
    return numbers.reduce((a,b) => a+b ,0)/numbers.length;
}


/*머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요. */

function solution(price) {
    while(true){
        if(price >=500000){
            return Math.floor(price*0.8);
        }
        else if(price >=300000){
            return Math.floor(price*0.9);
        }
        else if(price >=100000){
            return Math.floor(price*0.95);
        }
        else{
            return price;
        }
    }
}
