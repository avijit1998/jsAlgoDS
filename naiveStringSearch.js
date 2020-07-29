function naiveStringSearch(str, pattern) {
  let i = 0,
    j,
    count = 0;
  while (i < str.length) {
    let subStr = str.substring(i, i + pattern.length);
    for (j = 0; j < pattern.length; j++) {
      if (pattern[j] !== subStr[j]) {
        break;
      }
    }
    if (j === pattern.length) {
      i = i + pattern.length;
      count++;
    }
    i++;
  }
  console.log(count);
}

naiveStringSearch("womgwowomgw", "omg");
