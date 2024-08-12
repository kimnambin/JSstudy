function solution(num_list) {
    var 곱 = 1;
    var 합 = 0;
    var 제곱 = 0;
    
    for(let i =0; i < num_list.length; i++){
        곱 *= num_list[i]
        합 += num_list[i]
        제곱 = Math.pow(합,2)
    }
    return 곱 < 제곱 ? 1 : 0
}