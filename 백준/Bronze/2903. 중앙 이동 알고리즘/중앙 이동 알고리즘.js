const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
// .split('')

let 숫자 = Number(input)


console.log(Math.pow(Math.pow(2 , 숫자 )+1 ,2 ))