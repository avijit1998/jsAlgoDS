function substrCount(n, s) {
  let count = n;
  for (let i = 0; i < s.length; i++) {
    let diffIndx = -1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (diffIndx === -1) {
          count++;
        } else if (j - diffIndx === diffIndx - i) {
          count++;
          break;
        }
      } else {
        if (diffIndx === -1) {
          diffIndx = j;
        } else {
          break;
        }
      }
    }
  }
  return count;
}

let s = "mnonopoo";
console.log(substrCount(s.length, s));
