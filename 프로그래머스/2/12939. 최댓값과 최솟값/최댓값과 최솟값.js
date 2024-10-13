function solution(s) {
    var answer = '';
    
    let new_s = s.split(' ').map(Number)
    let sort_s = new_s.sort((a,b) => a-b)
    
    
    answer += Math.min(...sort_s) + ' ' + Math.max(...sort_s)
    
    return answer;
}