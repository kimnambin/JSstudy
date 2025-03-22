function solution(n, w, num) {
    var answer = 0;
    let h = Math.ceil(n / w);

    
    let stack = Array.from({ length: h }, () => Array.from({ length: w }).fill(0));

    let start = 1;

    for (let i = 0; i < stack.length; i++) {
        for (let j = 0; j < stack[i].length; j++) {
            if (start > n) break; 
            stack[i][j] = start;
            start++;
        }
    }

 
    for (let i = 1; i < stack.length; i += 2) {
        stack[i].reverse();
    }

    // 몇 층에 있는지 찾기
    let layer = Math.floor((num - 1) / w);
    let idx = stack[layer].indexOf(num);

    
    for (let i = layer; i < stack.length; i++) {
        if (stack[i][idx] > 0) {
            answer++;
        }
    }

    return answer;
}
