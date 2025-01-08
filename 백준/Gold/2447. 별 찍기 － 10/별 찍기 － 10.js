const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()

function starPrint(n) {
    if(n == 1) return ['*']
    
    let star = starPrint(n / 3)
    let starList = []
    
    // 상
    starList = starList.concat(...star.map((v) => v + v + v))
    
    // 중간 (여기서 공백이 발생하기 때문에 push)
    starList.push(...star.map((v) => v + ' '.repeat(star.length) + v))
    
    // 하
    starList = starList.concat(...star.map((v) => v + v + v))
    
    return starList
}

console.log(starPrint(Number(input)).join('\n'))