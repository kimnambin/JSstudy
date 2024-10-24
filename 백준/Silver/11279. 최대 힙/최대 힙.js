const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cmd = input.slice(1).map(Number);

class heap {
  constructor() {
    this.items = [];
  }

  insert(v) {
    this.items.push(v);
    this.up();
  }

  up() {
    let idx = this.items.length - 1;
    while (idx > 0) {
      const parent_idx = Math.floor((idx - 1) / 2);
      if (this.items[idx] <= this.items[parent_idx]) break;
      [this.items[idx], this.items[parent_idx]] = [
        this.items[parent_idx],
        this.items[idx],
      ];
      idx = parent_idx;
    }
  }
  peek() {
    if (this.items.length === 0) return 0;
    const max = this.items[0];
    const end = this.items.pop();

    if (this.items.length > 0) {
      this.items[0] = end;
      this.down();
    }
    return max;
  }

  down() {
    let idx = 0;
    while (true) {
      let max = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;

      if (left < this.items.length && this.items[left] > this.items[max]) {
        max = left;
      }

      if (right < this.items.length && this.items[right] > this.items[max]) {
        max = right;
      }

      if (max === idx) break;
        [this.items[idx], this.items[max]] = [this.items[max], this.items[idx]];
      idx = max;
    }
  }
}

const solution = cmd => {
  let result = [];
  const Heap = new heap();

  cmd.map(v => {
    if (v === 0) {
      result.push(Heap.peek());
    } else {
      Heap.insert(v);
    }
  });

  return result.join('\n');
};

console.log(solution(cmd));