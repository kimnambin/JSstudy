const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let num = input[i]; 
  let sum = 0;
  let tmp = [];

  
  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      tmp.push(j);
      sum += j; 
    }
  }

  if (sum === num) {
    console.log(`${num} = ${tmp.join(' + ')}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}