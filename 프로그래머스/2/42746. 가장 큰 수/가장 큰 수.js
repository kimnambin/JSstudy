function solution(numbers) {
    
    const new_Numbers = numbers.map(String).sort((a, b) => (b + a) - (a + b));

    
    const result = new_Numbers.join('');

    return result[0] === '0' ? '0' : result;
}