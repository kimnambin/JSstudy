function solution(brown, yellow) {
    const total = brown + yellow;

    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {  
            const j = yellow / i; 
           
            if ((j + 2) * (i + 2) === total) {
                return [j + 2, i + 2];
            }
        }
    }
}
