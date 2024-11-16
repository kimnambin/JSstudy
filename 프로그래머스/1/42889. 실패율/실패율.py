def solution(N, stages):
    answer = []
    pasent = {}
    player = len(stages)
    
    for i in range(1, N+1) :
        if player == 0 :
            pasent[i] = 0
        else :
             pasent[i] = stages.count(i) / player
             player -= stages.count(i)
                
            
    return sorted(pasent , key=lambda x : pasent[x] , reverse = True)