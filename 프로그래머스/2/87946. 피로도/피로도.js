function solution(k, dungeons) {
    let answer = 0;
    let visited = new Array(dungeons.length).fill(false) //방문 여부 확인
    
    function DFS(hp,D){ 
        //hp는 피로도 , D는 깊이(정답)
        for(let i =0; i < dungeons.length; i++){
            if(dungeons[i][0] <= hp && !visited[i]){
                visited[i] = true
                DFS(hp - dungeons[i][1] , D+1)
                visited[i] = false
            }
        }
      answer = Math.max(answer,D);
    }
    DFS(k,0)
    return answer
}