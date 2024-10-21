function solution(nums) {
    let nums_length = [...new Set(nums)]
    let kind = Math.floor(nums.length / 2)

    if(nums_length.length < kind){
        return nums_length.length
    }
    else {
        return kind
    }
    
}