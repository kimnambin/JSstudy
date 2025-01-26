const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, total] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const solution = (total, nums) => {
  let result = 0;
  let left = 0;
  let right = 0;
  let cnt = 0;

  while (right < nums.length) {
    cnt += nums[right];

    while (cnt > total) {
      cnt -= nums[left];
      left++;
    }

    if (cnt == total) {
      result++;
       cnt -= nums[left];
      left++;
    }

    right++;
  }

  return result;
};

console.log(solution(total, nums));
