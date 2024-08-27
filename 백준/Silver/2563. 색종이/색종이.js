const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

let 첫번째줄 = input[0]
let map = Array.from(Array(100), ()=> Array(100).fill(0))

for(let i = 1; i <= 첫번째줄; i++){
    let [x,y] = input[i].split(' ').map(Number)
    
    //가로
    for(let k =x; k < x+10; k++){
        //세로
        for(let e = y; e < y+10; e++){
            map[k][e] = 1;
        }
    }
}

let result =0;

for(let i =0; i < 100; i++){
    for(let j =0; j <100; j++){
        if(map[i][j] === 1) result ++;
    }
}

console.log(result)