// 주사위 게임 3

function solution(a, b, c, d) {
    var answer = 0;
    let p = [a,b,c,d]
    
    //첫번째 경우 (모두 같을 때)
    if(a === b && c === d && b === c) answer += (1111 * a)
    
    // ===========================================================
    
    //2번째 경우 (3개가 같을 때)
    
    //a가 다를 경우
    else if (c === d && b === c && b === d) answer += (10 * b + a) **2
    
    //b가 다를 경우
    else if (c === a && d === c && a === d) answer += (10 * a + b) **2
    
    //c가 다를 경우
    else if (a === d && b === d && a === b) answer += (10 * a + c) **2
    
    //d가 다를 경우
    else if (c === a && b === c && a === b) answer += (10 * b + d) **2
    
    // ===========================================================
    
    //3번째 경우 (2개 , 2개 같을 때)
    
    // ab /cd가 같은 경우
    else if (a === b && c === d) answer += (a+c) * Math.abs(a-c)
        
    // ac /bd
    else if (a === c && b === d) answer += (a+b) * Math.abs(a-b)
    
    // ad /bc
        
    else if (a === d && b === c) answer += (a+b) * Math.abs(a-b)
    
    // ===========================================================
    
    //4번째 경우 (2개만 같을 때)
    
    // a b
    else if (a === b && b !== c && b !== d) answer += c*d
    
    // a c
    else if (a === c && a !== b && a !== d) answer += b*d
    
    // a d
    else if (a === d && a !== b && a !== c) answer += b*c
    
    // b c
    else if (b === c && b !== a && b !== d) answer += a*d
    
    // b d
    else if (b === d && b !== a && b !== c) answer += a*c
    
    // c d
    else if (c === d && c !== a && c !== b) answer += a*b
    
    // ===========================================================
    
    //5번째 경우 (모두 다를때)
    
    else answer += p.sort((a,b)=> a-b)[0]
    
    return answer;
}

//엄청난 조건들이 있던 주사위3 문제였다
//첨엔 조금이라도 코드를 줄여보려고 노력했으나...
//일단 정답을 맞추자라는 마인드로 모든 조건을 다 적어서 문제를 풀수 있었다 ㅋㅋㅋ
//다른 분들의 코드를 보니 애초에 조건이 많아서 짧게 풀 수 없는 문제였다ㅜㅜ
//마지막 조건 (모두 다를 땐) Math.min()을 이용해서 풀 수 있었는데 잠깐 까먹어서 괜히 sort()문까지 사용해서 풀었다 ㅠㅠ