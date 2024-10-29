class Deque {
  constructor() {
    this.frontArray = [];
    this.backArray = [];
  }

  frontPush(value) {
    this.frontArray.push(value);
  }

  backPush(value) {
    this.backArray.push(value);
  }

  frontPop() {
    if (this.isEmpty()) return -1;
    if (this.frontArray.length === 0) {
      this.frontArray = this.backArray.reverse();
      this.backArray = [];
    }
    return this.frontArray.pop();
  }

  backPop() {
    if (this.isEmpty()) return -1;
    if (this.backArray.length === 0) {
      this.backArray = this.frontArray.reverse();
      this.frontArray = [];
    }
    return this.backArray.pop();
  }

  isEmpty() {
    return this.frontArray.length === 0 && this.backArray.length === 0;
  }

  size() {
    return this.frontArray.length + this.backArray.length;
  }

  frontPeek() {
    if (this.isEmpty()) return -1;
    if (this.frontArray.length === 0) {
      return this.backArray[0];
    }
    return this.frontArray[this.frontArray.length - 1];
  }

  backPeek() {
    if (this.isEmpty()) return -1;
    if (this.backArray.length === 0) {
      return this.frontArray[0];
    }
    return this.backArray[this.backArray.length - 1];
  }
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let result = [];
let deque = new Deque();

for (let i = 1; i <= n; i++) {
  let cmd = input[i].split(' ').map(Number);

  switch (cmd[0]) {
    case 1:
      deque.frontPush(cmd[1]);
      break;
    case 2:
      deque.backPush(cmd[1]);
      break;
    case 3:
      result.push(deque.frontPop());
      break;
    case 4:
      result.push(deque.backPop());
      break;
    case 5:
      result.push(deque.size());
      break;
    case 6:
      result.push(deque.isEmpty() ? 1 : 0);
      break;
    case 7:
      result.push(deque.frontPeek());
      break;
    case 8:
      result.push(deque.backPeek());
      break;
  }
}

console.log(result.join('\n'));
