const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [p, q] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let cnt = 0;
let answer = -1; // 최종 정답 (인덱스 위치를 맞추기 위함)

// K번째 확인용
const checkout = num => {
  if (cnt === q) {
    answer = num[num.length - 1];
  }
};

//2개의 배열을 비교하며 더 작은 값을 tmp에 저장
const merge = (arr1, arr2) => {
  let tmp = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      tmp.push(arr1[i]);
      i++;
    } else {
      tmp.push(arr2[j]);
      j++;
    }
    cnt++;
    checkout(tmp);
  }

  while (i < arr1.length) {
    tmp.push(arr1[i]);
    i++;
    cnt++;
    checkout(tmp);
  }

  while (j < arr2.length) {
    tmp.push(arr2[j]);
    j++;
    cnt++;
    checkout(tmp);
  }
  return tmp;
};

//병합 정렬
const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  let le = mergeSort(arr.slice(0, mid));
  let ri = mergeSort(arr.slice(mid));

  return merge(le, ri);
};

mergeSort(arr);
console.log(answer);
