function alternatingCharacters(s) {
  let i = 0,
    del = 0;
  while (i < s.length) {
    for (let j = i; j < s.length; j++) {
      if (s[j] === s[j + 1]) {
        del++;
        continue;
      } else if (s[j] !== s[j + 1]) {
        i = j + 1;
        break;
      }
    }
  }
  return del;
}

console.log(alternatingCharacters("aaabbb"));
