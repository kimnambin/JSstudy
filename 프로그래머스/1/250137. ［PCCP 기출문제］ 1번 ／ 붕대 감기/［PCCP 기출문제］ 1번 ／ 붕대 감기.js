function solution(bandage, health, attacks) {
    const [t , x , y] = bandage
    const maxHP = health
    
    let lastAttack = 0 // 마지막 공격 시간
    
    for(const [attackTime , damage] of attacks){
        
        let time = attackTime - lastAttack - 1 //공격한 시간
        let heal = time * x + Math.floor(time / t) * y
        health = Math.min(maxHP , heal + health)
        
        health -= damage
        
        if(health <= 0) return -1
        
        lastAttack = attackTime
    }
    return health;
}