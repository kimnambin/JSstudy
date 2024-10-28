function solution(citations) {
  let H_idx = citations.sort((a, b) => b - a);

  for (let i = 0; i < H_idx.length; i++) {
    if (H_idx[i] < i + 1) {
      return i;
    }
     
  }
    return H_idx.length
}