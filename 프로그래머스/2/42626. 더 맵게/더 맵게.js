class minHeap {
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
      let parent_idx = Math.floor((idx - 1) / 2);

      if (this.items[idx] < this.items[parent_idx]) {
        [this.items[idx], this.items[parent_idx]] = [
          this.items[parent_idx],
          this.items[idx],
        ];
        idx = parent_idx;
      } else {
        break;
      }
    }
  }
  // 값 반환 + 제거
  remove() {
    if (this.isEmpty()) {
      return null;
    }
    let top = this.items[0];
    let bot = this.items.pop();

    if (!this.isEmpty()) {
      this.items[0] = bot;
      this.down();
    }
    return top;
  }
  // 값만 반환
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  down() {
    let idx = 0;

    while (idx < this.items.length) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let min = idx;

      if (left < this.items.length && this.items[left] < this.items[min]) {
        min = left;
      }

      if (right < this.items.length && this.items[right] < this.items[min]) {
        min = right;
      }

      if (idx === min) {
        break;
      }
      [this.items[idx], this.items[min]] = [this.items[min], this.items[idx]];
      idx = min;
    }
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
}

function solution(scoville, K) {
  let result = 0;
  let mH = new minHeap();

  // 스코빌 지수 삽입
  scoville.forEach(v => {
    mH.insert(v);
  });

  while (mH.size() > 1 && mH.peek() < K) {
    let fir = mH.remove();
    let sec = mH.remove();
    let top = fir + sec * 2;
    result++;
    mH.insert(top);
  }

  // 모든 음식의 스코빌 지수가 K 이상인지 확인
  return mH.peek() >= K ? result : -1;
}
