def solution(nums):
    set_leng = len(set(nums))
    num_leng = len(nums) // 2
    return num_leng if num_leng < set_leng else set_leng