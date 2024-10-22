const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const leftStack = input[0].split('');
  const rightStack = [];
  let commands = input.slice(2);

  for (let i = 0; i < commands.length; i++) {
    const [command, value] = commands[i].split(' ');

    switch (command) {
      case 'L':
        if (leftStack.length != 0) {
          rightStack.push(leftStack.pop());
        }
        break;

      case 'D':
        if (rightStack.length != 0) {
          leftStack.push(rightStack.pop());
        }
        break;

      case 'B':
        if (leftStack.length != 0) {
          leftStack.pop();
        }
        break;

      case 'P':
        leftStack.push(value);
        break;
    }
  }
  let result = leftStack.concat(rightStack.reverse()).join('');
  return result;
}

console.log(solution(input));