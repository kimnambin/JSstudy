function solution(video_len, pos, op_start, op_end, commands) {
  const time = str => {
    const [m, s] = str.split(':').map(Number);
    return m * 60 + s;
  };

  const resultTime = totalSeconds => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  let result_pos = time(pos);
  const result_start = time(op_start);
  const result_end = time(op_end);
  const result_video = time(video_len);

  if (result_start <= result_pos && result_pos <= result_end) {
    result_pos = result_end;
  }

  for (let command of commands) {
    if (command === 'next') {
      result_pos += 10;
      if (result_pos > result_video) {
        result_pos = result_video;
      }
    } else if (command === 'prev') {
      result_pos -= 10;
      if (result_pos < 0) {
        result_pos = 0;
      }
    }

    if (result_start <= result_pos && result_pos < result_end) {
      result_pos = result_end;
    }
  }

  return resultTime(result_pos);
}