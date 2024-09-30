const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

//먼저 나무들 간 간격 구하기
let tree_gap = []

for(let i =1; i < Number(input[0]); i++){
    tree_gap.push(Number(input[i+1]) - Number(input[i]))
}

//나무 간격 간 최대 공배수
const GCD = (a,b) => {
    while(b !== 0){
        [a,b] = [b , a%b]
    }
    return a;
}

let first_tree = tree_gap[0]
for(let i =1; i < tree_gap.length; i++){
    first_tree = GCD(first_tree , tree_gap[i])
}

//최종 정답
let result = 0;

for(const v of tree_gap){
    result += v / first_tree - 1
}

console.log(result)