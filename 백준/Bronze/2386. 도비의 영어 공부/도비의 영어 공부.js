const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function count(word) {
  let cnt = 0;
  let result = [];

  for (let i = 1; i < word.length; i++) {
    if (word[0] == word[i]) {
      cnt++;
    }
  }

  result.push(`${word[0]} ${cnt}`);
  return result;
}

for (let i = 0; i < input.length - 1; i++) {
  const findEng = input[i].split(' ');
  const mergeEng = findEng.join(' ').toLowerCase();
  console.log(count(mergeEng).join('\n'));
}
