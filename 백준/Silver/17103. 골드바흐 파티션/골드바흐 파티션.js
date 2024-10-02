const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = input.slice(1).map(Number);
let result = {};

N.forEach(v => {
  result[v] = 0;
});


const maxNumber = Math.max(...N);
const isPrime = Array(maxNumber + 1).fill(true);
isPrime[0] = isPrime[1] = false; 


for (let i = 2; i * i <= maxNumber; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= maxNumber; j += i) {
      isPrime[j] = false;
    }
  }
}


for (let number of N) {
  let sosu_total = 0;

  for (let j = 2; j <= number / 2; j++) {
    let another_number = number - j;
    if (isPrime[j] && isPrime[another_number]) {
      sosu_total++;
    }
  }
  
  result[number] = sosu_total;
}

// 결과 출력
N.forEach(i => {
  console.log(result[i]);
});