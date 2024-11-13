def solution(n):
    answer = 0

    new_N = str(n)
    
    for i in range(0,len(new_N)) :
        answer += int(new_N[i])
    

    return answer