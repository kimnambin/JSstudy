const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const [n,m] = input[0].split(' ').map(Number)
const graph = input.slice(1).map((v) => v.split('').map(Number))

const BFS = (start) => {
    const dir = [[1,0],[-1,0] , [0,1],[0,-1]]
    let queue = [start]
    
    while(queue.length > 0){
        const [x,y] = queue.shift()
        
        for(let i = 0; i < dir.length; i++){
            const [dx,dy] = [x+ dir[i][0] , y + dir[i][1]]
            
            if(dx >= 0 && dx < n && dy >= 0 && dy < m && graph[dx][dy] == 1){
                queue.push([dx,dy])
                graph[dx][dy] = graph[x][y] + 1
            }
        }
    }
    return graph[n-1][m-1]
}

console.log(BFS([0,0]))