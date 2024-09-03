function solution(ingredient) {
    
    let 재료 = [];
    let 햄버거 = 0;
    
    for(let i =0; i < ingredient.length; i++){
         재료.push(ingredient[i])
        
        if(재료.length >= 4){
        let 버거 = 재료.slice(-4);
            if(버거.join('') === '1231'){
                재료.splice(-4,4)
                햄버거 ++;
            }
        }
    }
    
    return 햄버거
}




