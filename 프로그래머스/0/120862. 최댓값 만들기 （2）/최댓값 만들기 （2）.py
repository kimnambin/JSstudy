def solution(numbers):
    left = 0
    right = 0
    num = sorted(numbers)
    
    return num[0] * num[1] if num[0] * num[1] > num[len(num)-1] * num[len(num)-2] else num[len(num)-1] * num[len(num)-2]