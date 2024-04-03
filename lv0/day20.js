/*2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 
dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요. */

function solution(dots) {
    const answer = dots.sort()
    
    let g1 = answer[0];
    let g2 = answer[1];
    let g3 = answer[2];

    let a = Math.sqrt((g1[0] - g3[0])**2 + (g1[1] - g3[1])**2) 
    let b = Math.sqrt((g1[0] - g2[0])**2 +  (g1[1] - g2[1])**2)
   
    return a * b;
}

/*머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 
예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 
머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 
캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
[0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다. */

function solution(keyinput , board) {
    
    let x = 0;
    let y = 0; //초기값 0,0 설정

    let maxX = (board[0]/2); //최대값 설정
    let maxY = (board[1]/2);

    for(let i = 0 ; i < keyinput.length; i ++){
        if(keyinput[i]=== "left" && x-1 > -maxX) x--
        if(keyinput[i]=== "right" && x+1 < maxX) x++
        if(keyinput[i]=== "up" && x < maxY) y++
        if(keyinput[i]=== "down" && y-1 > -maxY) y--
    }
    return [x,y];
}
//이 문제는 정말 어려웠다 ㅠㅠㅠ 근데 초기값과 최대값을 설정하고 for문을 사용하면 어렵지 않은 문제였다
//하지만 코드를 봐서 해볼만해 보이는 거지 어렵긴 한 문제이다 ㅠㅠㅠ
//앞으로 조건 2개가 주어지면 뭔저 값을 설정하고 &&이나 ||을 사용해서 문제를 풀어야 겠당

/*정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요. */

function solution(numbers) {
    var answer = numbers.sort((a,b) => b-a);
    let a = answer[0] * answer[1];
    
    var result = numbers.sort((a,b) => a-b);
    let b = result[0] * result[1];
    
    if(a > b){
        return a;
    }else{
        return b;
    }
}

//첨엔 리버스 sort를 해서 0,1이 제일 큰 수인줄 알았는데 -5,-3이런식으로 
//할 때가 더 큰 경우도 있어서 일반 sort를 해서 값을 구할 수 있었다.

/*한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
같은 식이라면 가장 짧은 수식을 return 합니다. */

function solution(polynomial) {
    var answer = [];
    let xx = 0 , num = 0;

    polynomial.split(' + ').map( v =>{
        if(v.includes('x')){
            xx += Number(v.substr(0,v.lenhth -1)|| 1 );
        }else num += Number(num)
    })

    if(xx == 1) answer.push('x')
    else if (xx > 1) answer.push(`${xx}x`)
    if(num) answer,push(`${num}`) 

    return answer.length ? answer.join('+') : "0";
}

//이 문제 너무너무 어려웠다 ㅠㅠㅠ 지금까지 푼 문제 중 제일 어려움 ㅜ.ㅜ
// x 포함 여부  x , 2x , 상수 등등 생각해야 할 게 너무 많았던 문제였다 ㅜㅜ
// if {} 쓰고 if else 그냥 이렇게 쓸 수 있는 거랑 substr(a,b)도 알게 된 문제였다