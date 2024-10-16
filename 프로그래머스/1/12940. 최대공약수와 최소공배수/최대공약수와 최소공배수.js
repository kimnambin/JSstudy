const solution = (n, m) => {
  let result = [];

  //최대공약수 먼저 구하기
  for (let i = n; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      result.push(i, (n / i) * (m / i) * i);
    }
  }

  return result.slice(0, 2);
};