function makeAnagram(a, b) {
  let obj1 = {},
    obj2 = {};

  [...a].forEach((c) => {
    obj1[c] = (obj1[c] || 0) + 1;
  });
  [...b].forEach((c) => {
    obj2[c] = (obj2[c] || 0) + 1;
  });
  let diff;
  for (const key in obj2) {
    if (obj1[key]) {
      if (obj1[key] <= obj2[key]) {
        diff = obj1[key];
      } else {
        diff = obj2[key];
      }
      obj1[key] = obj1[key] - diff;
      obj2[key] = obj2[key] - diff;
    }
    if (obj1[key] === 0) {
      delete obj1[key];
    }

    if (obj2[key] === 0) {
      delete obj2[key];
    }
  }

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);

  return sumValues(obj1) + sumValues(obj2);
}
console.log(
  makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
);
