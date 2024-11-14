def solution(s):
    answer = ''
    num_s = list(map(int , s.split()))
    
    answer += str(min(num_s)) + ' ' + str(max(num_s))
    
    return answer