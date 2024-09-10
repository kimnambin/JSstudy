function solution(numbers, hand) {
    var answer = '';
    let 왼손위치 = 10; 
    let 오른손위치 = 12; 
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
            answer += 'L';
            왼손위치 = numbers[i];
        } else if (numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
            answer += 'R';
            오른손위치 = numbers[i];
        } else {
            let num = numbers[i] === 0 ? 11 : numbers[i]; 
            
           
            const 왼손거리 = Math.abs(Math.floor((왼손위치 - 1) / 3) - Math.floor((num - 1) / 3)) +
                            Math.abs((왼손위치 - 1) % 3 - (num - 1) % 3);
            const 오른손거리 = Math.abs(Math.floor((오른손위치 - 1) / 3) - Math.floor((num - 1) / 3)) +
                            Math.abs((오른손위치 - 1) % 3 - (num - 1) % 3);
            
            if (왼손거리 < 오른손거리) {
                answer += 'L';
                왼손위치 = num;
            } else if (오른손거리 < 왼손거리) {
                answer += 'R';
                오른손위치 = num;
            } else {
                if (hand === 'right') {
                    answer += 'R';
                    오른손위치 = num;
                } else {
                    answer += 'L';
                    왼손위치 = num;
                }
            }
        }
    }
    
    return answer;
}
