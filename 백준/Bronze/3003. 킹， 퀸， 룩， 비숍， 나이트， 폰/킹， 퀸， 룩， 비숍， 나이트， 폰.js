const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const orginal_input = ['1', '1', '2', '2', '2', '8'];
let result = '';

for (let i = 0; i < input.length; i++) {
  //수가 같을 경우
   if (input[i] === orginal_input[i]) {
    result += 0 + ' ';
  }
  //input이 더 클 경우
  else if (Number(input[i]) > Number(orginal_input[i])) {
    result += Number(orginal_input[i]) - Number(input[i]) + ' ';
  }
  //orginal_input이 더 클 경우
  else {
    result += Number(orginal_input[i]) - Number(input[i]) + ' ';
  }
}

console.log(result);