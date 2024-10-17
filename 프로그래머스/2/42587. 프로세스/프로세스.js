const solution = (priorities, location) => {
  let cnt = 0;
  let idx = []; //인덱스 값 나타내기

  for (let i = 0; i < priorities.length; i++) {
    idx.push(i);
  }

  while (priorities.length != 0) {
    let max_num = Math.max(...priorities);
    //가장 큰 수가 맨 앞이 아닌경우
    if (max_num > priorities[0]) {
      priorities.push(priorities.shift());
      idx.push(idx.shift());
    }
    //가장 큰수가 맨 앞으로 온 경우
    else {
      cnt += 1;
      priorities.shift();
      if (idx.shift() === location) {
        return cnt;
      }
    }
  }
};