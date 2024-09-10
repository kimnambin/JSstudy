const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()

let n = Number(input)
let cnt = 0;

while( n >= 0){
    if(n % 5 === 0){
        cnt += n / 5
        console.log(cnt)
        break;
    }
    n -= 3;
    cnt ++;
}

if(n < 0){
    console.log(-1)
}