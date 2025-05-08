function solution(schedules, timelogs, startday) {
    let answer = 0;

    for (let i = 0; i < schedules.length; i++) {
        let cnt = 0;
        
        let goal = schedules[i] + 10;
        if(goal % 100 >= 60){
            goal += 100;
            goal -= 60;
        }

        for (let j = 0; j < 7; j++) {
            const weekday = ((startday - 1 + j) % 7) + 1;

            if (weekday === 6 || weekday === 7) continue;

            if (timelogs[i][j] <= goal) {
                cnt++;
            }
        }

        if (cnt >= 5) answer++;
    }

    return answer;
}
