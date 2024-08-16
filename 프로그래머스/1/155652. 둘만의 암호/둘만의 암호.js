function solution(s, skip, index) {
    var answer = '';
    const 알파벳 = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
];  
     
    const skipArray = [...skip];

    const 필터된알파벳 = 알파벳.filter(v => !skipArray.includes(v));

   for (let i = 0; i < s.length; i++) {
        const 현재문자 = s[i];
        
        const 현재문자인덱스 = 필터된알파벳.indexOf(현재문자);
        const 변환된인덱스 = (현재문자인덱스 + index) % 필터된알파벳.length;
        
        
        answer += 필터된알파벳[변환된인덱스];
    }
    
    return answer;
    
    return answer;
}