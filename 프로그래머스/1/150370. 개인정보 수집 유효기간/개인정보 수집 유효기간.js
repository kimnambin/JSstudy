function solution(today, terms, privacies) {
  var answer = [];
  let terms_arr = {};

  // today를 숫자로 바꾸기
  let [Y, M, D] = today.split('.').map(Number);

  //terms 객체로 관리하기
  for (let i = 0; i < terms.length; i++) {
    let [a, b] = terms[i].split(' '); //terms
    terms_arr[a] = Number(b);
  }

  //privacies
  for (let j = 0; j < privacies.length; j++) {
    let [c, d] = privacies[j].split(' '); //privacies바꾸기
    let [p_Y, p_M, p_D] = c.split('.').map(Number); //privacies의 날짜 바꾸기

    let result_Y = Math.floor((p_M + terms_arr[d] - 1) / 12); //더해야할 년도
    let result_M = Math.floor(((p_M + terms_arr[d] - 1) % 12) + 1); //최종 달

    //년도가 더 높을 경우
    if (Y > p_Y + result_Y) {
      answer.push(j + 1);
    }
    //년도가 같은데 달이 큰 경우
    else if (Y == p_Y + result_Y && M > result_M) {
      answer.push(j + 1);
    }
    //년도와 월이 같고 일이 큰 경우
    else if (Y == p_Y + result_Y && M == result_M && D >= p_D) {
      answer.push(j + 1);
    }
  }
  return answer;
}