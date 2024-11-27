function solution(k, dungeons) {
  let answer = 0;
  let visited = new Array(dungeons.length).fill(false);

  function DFS(hp, D) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && hp >= dungeons[i][0]) {
        visited[i] = true;
        DFS(hp - dungeons[i][1], D + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, D);
  }
  DFS(k, 0);
  return answer;
}
