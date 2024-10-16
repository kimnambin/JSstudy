const solution = s => {
  let tmp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[0] === ')') {
      return false;
    } else {
      s[i] === '(' ? tmp.push(0) : tmp.pop();
    }
  }

  return tmp.length === 0 ? true : false;
};
