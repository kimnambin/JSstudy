const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const [n,m] = input[0].split(' ').map(Number)
let SiteAndPW ={}

for(let i =1; i <= n; i++){
    let [site,pw] = input[i].split(' ')
    SiteAndPW[site] = pw
}

for(let i = n + 1; i <= m+n; i++){
    console.log(SiteAndPW[input[i].trim()])
}