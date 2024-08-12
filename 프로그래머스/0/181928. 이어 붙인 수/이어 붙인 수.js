function solution(num_list) {
    var 홀수 = '';
    var 짝수 = '';
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 !== 0) 홀수 += num_list[i]
        else 짝수 += num_list[i]
    }
    return Number(홀수) + Number(짝수);
}