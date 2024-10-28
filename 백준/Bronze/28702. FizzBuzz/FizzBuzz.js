const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let str = input[i].split('');

    if (str[0] !== 'F' && str[0] !== 'B') {
      let num_idx = i;
      let push_num = Number(input[num_idx]);

      if (num_idx == 2) {
        result.push(push_num + 1);
        break;
      } else if (num_idx == 1) {
        result.push(push_num + 2);
        break;
      } else {
        result.push(push_num + 3);
        break;
      }
    }
  }

  if (result % 3 === 0 && result % 5 === 0) {
    return 'FizzBuzz';
  } else if (result % 3 === 0 && result % 5 !== 0) {
    return 'Fizz';
  } else if (result % 3 !== 0 && result % 5 === 0) {
    return 'Buzz';
  } else {
    return result[0];
  }
}

console.log(solution(input));