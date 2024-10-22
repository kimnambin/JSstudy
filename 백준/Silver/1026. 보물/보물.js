const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const solution = (N, A, B) => {
  let max_A = Math.max(...A);
  let max_B = Math.max(...B);
  let sum = 0;

  if (max_A > max_B) {
    let new_B = B.sort((a, b) => b - a);
    let new_A = A.sort((a, b) => a - b);

    for (let i = 0; i < N; i++) {
      sum += new_B[i] * new_A[i];
    }
  } else{
    let new_B = B.sort((a, b) => a - b);
    let new_A = A.sort((a, b) => b - a);

    for (let i = 0; i < N; i++) {
      sum += new_B[i] * new_A[i];
    }
  }

  return sum;
};

console.log(solution(N, A, B));