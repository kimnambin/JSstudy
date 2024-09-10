const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim();

const 목표 = Number(input)
let 종말번호 = 666;
let cnt =1;

while(목표 !== cnt){
    종말번호 +=1;
    if(String(종말번호).includes('666')){
        cnt ++;
    }
}

console.log(종말번호)