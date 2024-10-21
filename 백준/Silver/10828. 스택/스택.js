const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const N = Number(input[0])

class Stack{
    constructor(){
        this.items = []
    }
    
    push(e){
        this.items.push(e)
    }
    
    pop(){
        if(this.isEmpty()){
            return -1
        }
        return this.items.pop()
    }
    
    size(){
        return this.items.length
    }
    
    isEmpty(){
        return this.items.length === 0
    }
    
    empty(){
        return this.isEmpty() ? 1 : 0
    }
    
    top(){
        if(this.empty()){
            return - 1
        }
        return this.items[this.items.length -1]
    }
}

const stack = new Stack()
let result = []

for(let i = 1; i <= N; i++){
    const cmd = input[i].split(' ')
    
    switch(cmd[0]){
        case 'push' :
            stack.push(cmd[1])
            break
        
             case 'pop' :
            result.push(stack.pop())
            break
            
             case 'size' :
            result.push(stack.size())
            break
            
             case 'empty' :
            result.push(stack.empty())
            break
            
             case 'top' :
             result.push(stack.top())
            break
    }
}

console.log(result.join('\n'))