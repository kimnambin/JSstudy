const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

class queue {
    constructor() {
      this.items = [];
    }
  
    push(v) {
      this.items.push(v);
    }
  
    pop() {
      return this.items.length > 0 ? this.items.shift() : -1; 
    }
  
    size() {
      return this.items.length; 
    }
  
    front() {
      return this.items.length > 0 ? this.items[0] : -1; 
    }
  
    back() {
      return this.items.length > 0 ? this.items[this.items.length - 1] : -1; 
    }
  
    empty() {
      return this.items.length === 0 ? 1 : 0; 
    }
  }


function solution (input){
    const N =Number(input[0])
    let Queue = new queue();
    let result = []

    for(let i = 1; i<= N; i++){
        let cmd = input[i].split(' ')
        
        switch(cmd[0]){
            case 'push' :
                Queue.push(cmd[1])
                break
            
                case 'pop' :
                    result.push(Queue.pop())
                    break
                    
                    case 'size' :
                        result.push(Queue.size())
                break

                case 'empty' :
                    result.push(Queue.empty())
                break

                case 'front' :
                    result.push(Queue.front())
                break

                case 'back' :
                    result.push(Queue.back())
                break
        }
    }
    
    return result.join('\n')
}


console.log(solution(input))

