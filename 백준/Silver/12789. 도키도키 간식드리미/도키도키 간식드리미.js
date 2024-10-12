const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let people = input[1].split(' ').map(Number);

let sort_num = [...people].sort((a, b) => a - b); 
let tmp = []; // 임시 
let get = []; // 간식을 받은 사람들

let i = 0;

while (i < N) {
  let last_tmp = tmp.length - 1;

  
  if (tmp.length === 0 || tmp[last_tmp] > people[i]) {
    tmp.push(people[i]);
    i++;
  } else {
    get.push(tmp.pop());
  }
}


while (tmp.length > 0) {
  get.push(tmp.pop());
}

let isEqual = get.every((value, index) => value === sort_num[index]);

console.log(isEqual ? 'Nice' : 'Sad');

