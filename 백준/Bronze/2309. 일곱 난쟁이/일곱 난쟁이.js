const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let nums = input.sort((a, b) => a - b);
let sum = nums.reduce((a, b) => a + b);

let result = [];

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    let partSum = nums[i] + nums[j];

    if (sum - partSum === 100) {
      result = nums.filter(v => v !== nums[i] && v !== nums[j]);
      break;
    }
  }
}

console.log(result.join('\n'));