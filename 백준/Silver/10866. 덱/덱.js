const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let result = [];

class Deque {
  constructor() {
    this.items = [];
  }
  push_front(v) {
    this.items.unshift(v);
  }
  push_back(v) {
    this.items.push(v);
  }
  pop_front() {
    if (this.empty()) {
      return -1;
    }
    return this.items.shift();
  }
  pop_back() {
    if (this.empty()) {
      return -1;
    }
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  empty() {
    return this.items.length == 0 ? 1 : 0;
  }
  front() {
    if (this.empty()) {
      return -1;
    }
    return this.items[0];
  }
  back() {
    if (this.empty()) {
      return -1;
    }
    return this.items[this.items.length - 1];
  }
}

let deque = new Deque();
let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let [A, B] = input[i].split(' ');

   if (A == 'push_back') {
    deque.push_back(B);
  } else if (A == 'push_front') {
    deque.push_front(B);
  } else if (A == 'pop_front') {
    result.push(deque.pop_front());
  } else if (A == 'pop_back') {
    result.push(deque.pop_back());
  } else if (A == 'size') {
    result.push(deque.size());
  } else if (A == 'empty') {
    result.push(deque.empty());
  } else if (A == 'front') {
    result.push(deque.front());
  } else {
    result.push(deque.back());
  }

  // console.log(deque.items);
}

console.log(result.join('\n'));