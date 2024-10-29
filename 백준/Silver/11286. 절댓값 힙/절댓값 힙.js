const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];
const num = input.slice(1);

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  insert(v) {
    this.items.push(v);
    this.moveUp();
  }

  moveUp() {
    let idx = this.items.length - 1;

    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);

      // 절대값을 기준
      if (
        Math.abs(this.items[idx]) < Math.abs(this.items[parent]) ||
        (Math.abs(this.items[idx]) === Math.abs(this.items[parent]) &&
          this.items[idx] < this.items[parent])
      ) {
        [this.items[idx], this.items[parent]] = [
          this.items[parent],
          this.items[idx],
        ];
        idx = parent;
      } else {
        break;
      }
    }
  }

  moveDown() {
    let idx = 0; 

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let min_idx = idx;

      if (
        left < this.items.length &&
        (Math.abs(this.items[left]) < Math.abs(this.items[min_idx]) ||
          (Math.abs(this.items[left]) === Math.abs(this.items[min_idx]) &&
            this.items[left] < this.items[min_idx]))
      ) {
        min_idx = left;
      }

      if (
        right < this.items.length &&
        (Math.abs(this.items[right]) < Math.abs(this.items[min_idx]) ||
          (Math.abs(this.items[right]) === Math.abs(this.items[min_idx]) &&
            this.items[right] < this.items[min_idx]))
      ) {
        min_idx = right;
      }

      if (min_idx === idx) {
        break; 
      }

      [this.items[idx], this.items[min_idx]] = [
        this.items[min_idx],
        this.items[idx],
      ];
      idx = min_idx; 
    }
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }
    const removedItem = this.items[0]; 
    const lastItem = this.items.pop(); 
    if (!this.isEmpty()) {
      this.items[0] = lastItem; 
      this.moveDown(); 
    }
    return removedItem; 
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0]; 
  }

  isEmpty() {
    return this.items.length === 0; 
  }
}


let pq = new PriorityQueue();
let result = [];

for (let i = 1; i <= n; i++) {
  if (num[i - 1] !== 0) {
    pq.insert(num[i - 1]);
  } else {
    const removed = pq.remove();
    result.push(removed !== null ? removed : 0); 
  }
}

console.log(result.join('\n')); 
