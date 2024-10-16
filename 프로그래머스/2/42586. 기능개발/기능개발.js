const solution = (progresses, speeds) => {
  let days = []; // 각 기능이 배포되는 데 걸리는 일수를 저장할 배열

  // 각 기능의 배포까지 걸리는 날 수를 계산
  for (let i = 0; i < progresses.length; i++) {
    let remaining = 100 - progresses[i];
    let daysNeeded = Math.ceil(remaining / speeds[i]); // 하루 단위로 올림
    days.push(daysNeeded);
  }

  let result = [];
  let j = 0;
  while (j < days.length) {
    let cnt = 1; // 현재 기능을 하나 카운트
    let currentDay = days[j]; // 현재 배포일

    // 다음 기능이 같은 날이나 그 이후에 배포되는지 확인
    while (j + 1 < days.length && days[j + 1] <= currentDay) {
      cnt++;
      j++;
    }

    result.push(cnt); // 배포되는 기능의 수를 결과에 추가
    j++; // 다음 기능으로 이동
  }

  return result;
};