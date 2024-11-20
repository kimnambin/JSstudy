const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let n = Number(input[0]); //총 테스트 갯수

for (let i = 1; i <= n; i++) {
  let num = Number(input[i]);

  if (num === 0) {
    console.log(`1 0`);
    continue;
  } else if (num === 1) {
    console.log(`0 1`);
    continue;
  } else {
    let fibo_00 = 0;
    let fibo_01 = 1;

    let idx = 2; //비교할 수
    while (idx <= input[i]) {
      //피보 2부터 시작
      let fibo = fibo_01 + fibo_00;
      fibo_00 = fibo_01;
      fibo_01 = fibo;
      idx++;
    }
    console.log(fibo_00 + ' ' + fibo_01);
  }
}
