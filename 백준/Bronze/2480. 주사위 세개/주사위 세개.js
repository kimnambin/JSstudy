const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split(' ')

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

//모두 같을 때
if (A === B && B === C && A === C) console.log(10000 + A * 1000);
//2개가 같을 때 일단 A만 다를 때
else if (B === C && B !== A) console.log(1000 + B * 100);
//이번엔 B가 다름
else if (A === C && A !== B) console.log(1000 + A * 100);
//c
else if (A === B && A !== C) console.log(1000 + A * 100);
//이번엔 3개가 다른 경우
else if (A !== B && B !== C && A !== C) {
  if (A > B && A > C) console.log(A * 100);
  else if (B > C && B > A) console.log(B * 100);
  else console.log(C * 100);
}