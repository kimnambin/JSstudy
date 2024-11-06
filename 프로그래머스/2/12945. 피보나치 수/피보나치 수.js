function solution(n) {
  let zero = 0;
  let one = 1;
  let fibo = 0;

  for (let i = 2; i <= n; i++) {
    fibo = (zero + one) % 1234567;
    zero = one;
    one = fibo;
  }

  return fibo;
}