function solution(progresses, speeds) {
    var answer = [];
    let finish = [];

   
    for (let i = 0; i < progresses.length; i++) {
        let remained = 100 - progresses[i];
        let days = Math.ceil(remained / speeds[i]);
        finish.push(days);
    }

    let maxDay = finish[0]; 
    let count = 0;          

    for (let i = 0; i < finish.length; i++) {
        if (finish[i] <= maxDay) {
            count++;
        } else {
            answer.push(count); 
            count = 1;        
            maxDay = finish[i];
        }
    }

   
    answer.push(count);


    return answer;
}