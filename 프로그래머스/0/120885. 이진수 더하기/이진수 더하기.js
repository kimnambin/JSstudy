const solution = (bin1, bin2) => {
  let total = Number(bin1) + Number(bin2);
  let tmp = [];
  let total_split = String(total).split('').map(Number);

  for (let i = total_split.length - 1; i >= 0; i--) {
    if (total_split[i] < 2) {
      tmp.push(total_split[i]);
    } else {
      tmp.push(total_split[i] - 2);
      // 가장 왼쪽이 아닌 경우
      if (i - 1 >= 0) {
        total_split[i - 1] += 1;
      }
      // 가장 왼쪽인 경우
      else {
        tmp.push(1);
      }
    }
  }

  return tmp.reverse().join('');
};