const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

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
    return this.items.shift();
  }

  pop_back() {
    return this.items.pop();
  }

  front() {
    return this.items[0];
  }

  back() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

let deque = new Deque();
let [N, M] = input[0].split(' ').map(Number);
let idx = input[1].split(' ').map(Number);

for (let i = 1; i <= N; i++) {
  deque.push_back(i);
}

let cnt = 0;

for (let i = 0; i < M; i++) {
  let target = idx[i];

  while (deque.front() !== target) {
    let targetIndex = deque.items.indexOf(target);
    let mid = Math.floor(deque.size() / 2);

    if (targetIndex <= mid) {
      deque.push_back(deque.pop_front());
    } else {
      deque.push_front(deque.pop_back());
    }
    
    cnt++;
  }

  deque.pop_front();
}
console.log(cnt);