import math

def solution(a, b):
    gcd = math.gcd(a,b)
    b /= gcd
    
    for i in [2,5] :
        while b % i == 0 :
            b //= i
            
    return 1 if b == 1 else 2