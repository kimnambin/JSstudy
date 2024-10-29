function solution(s) {
  let fir = 0;
  let sec = 0;

  while (s !== '1') {
    let no_zero = s.split('').filter(v => v !== '0').length;
    sec += s.length - no_zero;
    fir++;

    s = no_zero.toString(2);
  }

  return [fir, sec];
}