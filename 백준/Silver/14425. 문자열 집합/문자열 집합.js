const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

let [N,M] = input[0].split(' ').map(Number)
let s1 = input.slice(1 , N+1)
let s2 = input.slice(N+1 , input.length)

let new_s1 = new Set(s1)
let cnt = s2.map(i => new_s1.has(i))

let result = cnt.filter(v => v == true)

console.log(result.length)