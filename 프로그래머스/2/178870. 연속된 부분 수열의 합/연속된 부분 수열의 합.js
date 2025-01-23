function solution(sequence, k) {
    var answer = [];
    let left = 0
    let right = 0
    let sum = 0
    
    while(right < sequence.length){
        sum += sequence[right]
        
        while(sum > k){
            sum -= sequence[left]
            left ++
        }
        
        if(sum === k){
            answer.push([left,right])
        }
        
        right ++
    }
    
    answer.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]))
    return answer[0];
}