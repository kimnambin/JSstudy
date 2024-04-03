/*외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 
배열을 return하도록 solution 함수를 완성해주세요. */

function solution(emergency) {
    // [...emergency] slice() 쓰는대신 이것도 있다함
    const sortt = emergency.slice().sort((a,b) => (b-a));
    
    return emergency.map(v=>sortt.indexOf(v)+1);
}
// 1. 배열을 역순으로 두기
// 2. 배열에 순서를 메기고 원래 순서대로 다시 나열

/*순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 
자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요. */
function solution(n) {
    var answer = 0;
    for(let i =0; i<=n; i++){
        if( n % i === 0){
            answer += 1;
        }
    }
    return answer;
}

/*개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 
장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 
예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 
장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 
사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 
몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요. */

function solution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5)/3) + Math.floor((hp % 5)%3);
}

