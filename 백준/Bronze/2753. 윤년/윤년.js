const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  //   .trim()
  .split(' ');

const A = Number(input[0]);
// const B = Number(input[1]);

// if (A >= 90 && 100 >= A) console.log('A');
// else if (A >= 80 && 90 > A) console.log('B');
// else if (A >= 70 && 80 > A) console.log('C');
// else if (A >= 60 && 70 > A) console.log('D');
// else console.log('F');

console.log((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0 ? 1 : 0);