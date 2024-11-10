def solution(my_string):
    answer = 0
    tmp_str = ''
    
    for i in my_string :
        if i.isdigit() :
            tmp_str += i
            
        else :
            if tmp_str :
                answer += int(tmp_str)
                tmp_str = ''
                
    if tmp_str :
        answer += int(tmp_str)
            
    return answer