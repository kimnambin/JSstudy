const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')


const list = input[1].split(' ').map(Number);
const [_, end] = input[0].split(' ').map(Number);

const sumArray = new Array(list.length + 1).fill(0)
for(let i = 1; i <= list.length; i++){
    sumArray[i] = sumArray[i-1] + list[i-1]
} 

let result = []

for(let i = 2; i < 2+end; i++){
    const [start , ending ] =input[i].split(' ').map(Number);
    result.push(sumArray[ending] - sumArray[start -1])
}

console.log(result.join('\n'))