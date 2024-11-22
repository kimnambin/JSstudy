function solution(people, limit) {
    var answer = 0;
    let new_people = people.sort((a,b) => a-b)
    let left = 0
    let right = new_people.length -1
    
    while(left <= right){
        if(new_people[left] + new_people[right] <= limit){
            left ++
}
        right --
        answer ++
    }
    
    return answer;
}