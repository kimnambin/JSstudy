const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

let get_card = {};

let N = input[1].trim().split(' ');
let M = input[3].trim().split(' ');

let result = '';

//먼저 가지고 있는 카드 리스트 넣기
for (let i = 0; i < M.length; i++) {
  get_card[M[i]] = 0;
}

//카드 갯수 세기
for (let j = 0; j < N.length; j++) {
  get_card[N[j]] += 1;
}

for (let i = 0; i < M.length; i++) {
  result += get_card[M[i]] + ' ';
}

console.log(result.trim());