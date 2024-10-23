const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const solution = input => {
  const N = Number(input[0]);
  let result = []; // 최종 정답

  for (let i = 1; i <= N; i++) {
    let add = 0;
    let sum = 0;
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 'O') {
        add++;
      } else {
        sum += (add * (add + 1)) / 2;
  
        add = 0;
      }
    }

    sum += (add * (add + 1)) / 2;
    result.push(sum);
  }

  return result.join('\n');
};

console.log(solution(input));