function solution(X, Y) {
    let numX = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    let numY = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    
    
    const xx = X.split('').map(Number)
    const yy = Y.split('').map(Number)
    
   
    for(let i =0; i < xx.length; i++){
        numX[xx[i]]++
    }
    
    for(let i =0; i < yy.length; i++){
        numY[yy[i]]++
    }
    
   
    let answer = '';
    for (let i = 9; i >= 0; i--) {
        let minCount = Math.min(numX[i], numY[i]);
        answer += i.toString().repeat(minCount);
    }

    
    if (answer.length === 0) {
        return '-1';
    }

   
    return answer[0] === '0' ? '0' : answer;
}

