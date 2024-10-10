const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('.');

let result = [];

for (let i = 0; i < input.length - 2; i++) {
  let tmp = [];
  let x = input[i].trim();
  let fact = true;

  for (const v of x) {
    // 첨에 삽입하기
    if (v == '(' || v == '[') {
      tmp.push(v);
    } else if (v === ')' || v === ']') {
      if (tmp.length === 0) {
        fact = false;
        break;
      }
      // () 랑 [] 이게 맞지 않는 경우
      if ((v == ')' && tmp.pop() !== '(') || (v == ']' && tmp.pop() !== '[')) {
        fact = false;
        break;
      }
    }
  }
  if (fact && tmp.length === 0) {
    result.push('yes');
  } else {
    result.push('no');
  }
}


console.log(result.join('\n'));