function solution(players, callings) {
    const ranking = {};
    
    for (let i = 0; i < players.length; i++) {
        ranking[players[i]] = i; 
    }

    
    for (const v of callings) {
        const index = ranking[v]; // 선수의 인덱스
        
        if (index > 0) {
            const 기존선수 = players[index - 1];

            // 자리 바꿈
            players[index - 1] = v;
            players[index] = 기존선수;

            // 인덱스 업데이트
            ranking[v] = index - 1;
            ranking[기존선수] = index;
        }
    }

    return players; 
}

