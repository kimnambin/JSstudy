def solution(polynomial):
    x_num = 0
    nomal_num = 0
    
    for i in polynomial.split(' + '):
        if i.isdigit() :
            nomal_num += int(i)
        else :
            x_num = x_num+1 if i=='x' else x_num + int(i[:-1])
    
    if x_num == 0 :
        return str(nomal_num)
    elif x_num == 1 :
        return 'x + '+str(nomal_num) if nomal_num !=0 else 'x'
    else :
        return f'{x_num}x + {nomal_num}' if nomal_num!=0 else f'{x_num}x'
 