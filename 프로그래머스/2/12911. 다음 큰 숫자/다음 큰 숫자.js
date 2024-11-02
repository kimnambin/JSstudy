function solution(n) {
  const cnt = (num) => num.toString(2).split('').filter(v => v === '1').length;
  
  const targetCount = cnt(n);
  let i = n + 1;
  
  while (true) {
    if (cnt(i) === targetCount) {
      return i;
    }
    i++;
  }
}