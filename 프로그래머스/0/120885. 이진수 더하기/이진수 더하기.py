def solution(bin1, bin2):
    ten_bin1 = int(bin1,2)
    ten_bin2 = int(bin2,2)
    total = ten_bin1 + ten_bin2
    return bin(total)[2:]