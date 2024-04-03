/*"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 
정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요. 

[출력]
*
**
***
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    });
    */
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let input = [];
    
    rl.on('line', function (line) {
        input = line.split(' ');
    }).on('close', function () {
        const n = Number(input[0]);   
    
    let line = 1; //라인은 1부터 시작
    
    //출력할 별 진행
    while (line <= n ){
        let star = ""; //출력할 별 
        let cnt = 0;
        star = star + " * ";
        
        //그만 출력하기 
    while (cnt < line){
        console.log (star);
        line = line + 1;
    }
    }    
});

/*문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 
return 하도록 solution 함수를 완성해보세요. */
function solution(my_string,n) {
    return my_string.split('').map(char=>char.repeat(n)).join('');
}
// repeat라는 함수를 처음 알게 됨 -->> 문자열에서 빼는 것


/*문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요. */
function solution(my_string,letter) {
    return my_string.split(letter).join('');
}


/*각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 
각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요. */
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}