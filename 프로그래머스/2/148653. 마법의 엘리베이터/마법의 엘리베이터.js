function solution(storey) {
    let answer = 0;
    let rev_storey = String(storey).split('').map(Number).reverse();
    
    let current = 0; // 올림 여부 결정
    for (let i = 0; i < rev_storey.length; i++) {
        let num = rev_storey[i] + current;

        if (num < 5) {
            // 버림
            answer += num;
            current = 0;
        } else if (num > 5) {
            // 올림
            answer += (10 - num);
            current = 1;
        } else {
            
            if (i + 1 < rev_storey.length && rev_storey[i + 1] >= 5) {
               
                answer += (10 - num);
                current = 1;
            } else {
                
                answer += num;
                current = 0;
            }
        }
    }
    
    
    if (current > 0) {
        answer += current;
    }
    
    return answer;
}