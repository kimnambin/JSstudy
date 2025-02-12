const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const str1 = input[0];
const str2 = input[1];

class stack {
  constructor() {
    this.items = [];
  }
  push(v) {
    this.items.push(v);
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const solution = (str1, str2) => {
  let Stack = new stack();

  let i = 0;

  while (i < str1.length) {
    Stack.push(str1[i]);
    i++;

    if (
      Stack.items.length >= str2.length &&
      Stack.items.slice(-str2.length).join('') === str2
    ) {
      for (let j = 0; j < str2.length; j++) {
        Stack.pop();
      }
    }
  }
  return Stack.items.length > 0 ? Stack.items.join('') : 'FRULA';
};

let a = solution(str1, str2);

console.log(a);
