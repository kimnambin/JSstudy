const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let [A, B] = input[i].split(' ').map(Number);
  if (B > A && B % A === 0) console.log('factor');
  else if (A > B && A % B === 0) console.log('multiple');
  else console.log('neither');
}