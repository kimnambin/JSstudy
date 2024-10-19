function solution(n) {
    let start = 1;
    let fac = 1;
    
    while (fac <= n){
        start ++
        fac *= start
    }
    return start -1;
}