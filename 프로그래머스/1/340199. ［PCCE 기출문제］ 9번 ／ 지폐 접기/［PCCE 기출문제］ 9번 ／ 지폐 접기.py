def solution(wallet, bill):
    answer = 0

    
    if wallet[0] >= bill[0] and wallet[1] >= bill[1]:
        return 0

    while True:
        if bill[0] > bill[1]:
            bill[0] //= 2
        else:
            bill[1] //= 2
        
        answer += 1
        
        if (wallet[0] >= bill[0] and wallet[1] >= bill[1]) or (wallet[1] >= bill[0] and wallet[0] >= bill[1]):
            break
        
        if bill[0] <= 0 and bill[1] <= 0:
            break

    return answer