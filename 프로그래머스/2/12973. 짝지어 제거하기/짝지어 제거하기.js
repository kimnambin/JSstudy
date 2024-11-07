class stack {
    constructor(){
        this.items = []
    }
    push(v){
        this.items.push(v)
    }
    pop(){
        if(this.isEmpty()){
            return -1;
        }
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length == 0;
    }
    peek(){
        if(this.isEmpty()){
            return -1
}
        return this.items[this.items.length -1]
    }
}

function solution(s)
{
   let Stack = new stack();
    
    for(let i =0; i< s.length; i++){
        if(Stack.isEmpty() || Stack.peek() !== s[i]){
            Stack.push(s[i])
        }
       else{
            Stack.pop()
       }
}
    return Stack.isEmpty() ? 1 : 0;
}