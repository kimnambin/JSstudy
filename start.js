// const input = require('fs').readFileSync('/dev/stdin').toString().split('');.split(/\s+/);

//1316번 그룹 단어 체커

const input = require('fs')
  .readFileSync('C:\\Users\\82109\\Desktop\\Study\\JSstudy\\input.txt')
  .toString()
  .trim()
  .split('\n');

let cnt = 0;

for (let i = 1; i <= input[0]; i++) {
  let 단어 = input[i].split('');
  let 그룹 = true;

  for (let j = 1; j < 단어.length; j++) {
    if (
      단어[j] !== 단어[j - 1] && //앞에 꺼와 같지 않을 때
      단어.indexOf(단어[j]) < j //중복 단어인지 확인용
    ) {
      그룹 = false; //그룹 단어에서 제외시킴
    }
  }
  if (그룹) cnt++;
}

console.log(cnt);
