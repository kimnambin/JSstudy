//최대공약수
function gcd(a,b){
    while(b > 0){
     let num = b
     b = a % b
     a = num   
    }
    return a
}

//최소 공배수
const lcm = (a,b) => {
    return (a * b) / gcd(a,b) 
}

function solution(arr) {
    var answer = 1;
    
    for(let i = 0; i < arr.length; i++){
        answer = lcm(answer,arr[i])
}
    return answer;
}