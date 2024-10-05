const wallpaper = [
  '..........',
  '.....#....',
  '......##..',
  '...##.....',
  '....#.....',
];

function solution(wallpaper) {
  var answer = [];

  const column = wallpaper.length;

  //시작
  let start1 = Number.MAX_VALUE;
  let start2 = Number.MAX_VALUE;

  //끝
  let end1 = Number.MIN_VALUE;
  let end2 = Number.MIN_VALUE;

  for (let i = 0; i < column; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] == '#') {
        start1 = Math.min(start1, i);
        start2 = Math.min(start2, j);
        end1 = Math.max(end1, i);
        end2 = Math.max(end2, j);
      }
    }
  }
  console.log(start1, start2, end1 + 1, end2 + 1);
  return (answer = [start1, start2, end1 + 1, end2 + 1]);
}

console.log(solution(wallpaper));
