const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let cnt = 0;

function recursion(s, l, r) {
  if (l === 0) cnt = 0;
  cnt++;
  if (l >= r) return 1;
  else if (s[l] !== s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

input.shift();

const result = input.map((v, _) => {
  return `${isPalindrome(v)} ${cnt}`;
});

console.log(result.join('\n'));