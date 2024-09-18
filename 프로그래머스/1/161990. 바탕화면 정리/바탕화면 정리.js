function solution(wallpaper) {
    var answer = [];
    //시작
    let start1 = Number.MAX_VALUE;
    let start2 = Number.MAX_VALUE;
    //끝
    let end1 = Number.MIN_VALUE;
    let end2 = Number.MIN_VALUE;
    
    for(let i =0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                start1 = Math.min(start1, i)
                start2 = Math.min(start2, j)
                end1 = Math.max(end1, i)
                end2 = Math.max(end2, j)
            }
        }
    }
    
    
    return answer = [start1, start2 , end1 + 1 , end2 + 1];
}