import itertools

def is_prime(a):
    if a < 2:
        return False
    
    for i in range(2, int(a ** 0.5) + 1):
        if a % i == 0:
            return False
            
    return True  

def solution(nums):
    answer = 0
    
    combi = list(itertools.combinations(nums , 3))

    for i in range(len(combi)) :
        answer += is_prime(sum(combi[i]))        
            
    return answer