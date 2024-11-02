function solution(str1, str2) {
    //1. 문자 모두 대문자로 통일하기!!
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    
    // 2. 2단어씩 문자 만들기!!
    const twoWord = (v) => {
        let word = []
        for(let i =0; i < v.length -1; i++){
            let new_word = v.substr(i,2)
            if(new_word[0] >= 'A' && new_word[0] <= 'Z' && new_word[1] >= 'A' && new_word[1] <= 'Z'){
                word.push(new_word)
            }
        }
        return word
    }
    
    // 3. 교집합 + 합집합 구하기
    let arr1 = twoWord(str1)
    let arr2 = twoWord(str2)
    
    let map = {}
    let total = 0; //합집합
    let diff = 0; //교집합
    
    for(const v of arr1){
        map[v] = (map[v] || 0) +1    
    }
    
    //arr1과 동일 시 diff 업 + map 마너스
    for(const v of arr2){
        if(map[v]){
            diff ++
            map[v]--
        }
        total ++
    }
    
    for(const v of Object.values(map)){
        total += v
    }
    
    if(total === 0 && diff === 0){
        return 65536
    }
    
    return Math.floor((diff/total) * 65536);
}