function solution(board, moves) {
    let cnt = 0;
    let tmp = [];
    
    
    let i = 0;
        
    while (i < moves.length) {

    for (let j = 0; j < board.length; j++) {
        if (board[j][moves[i] - 1] !== 0) {
            tmp.push(board[j][moves[i] - 1]); 
            board[j][moves[i] - 1] = 0; 
            break; 
        }
    }
    i++; 
}
    let tmp2 = [];
    

    for (let k = 0; k < tmp.length; k++) {
        if (tmp2.length > 0 && tmp2[tmp2.length - 1] === tmp[k]) {
            tmp2.pop(); 
            cnt++;
        } else {
            tmp2.push(tmp[k]); 
        }
    }
    
    return cnt*2;
}