function nestedEvenSum(obj) {
  let sum = 0;
  function eachRecursive(obj) {
    for (var k in obj) {
      if (typeof obj[k] == "object" && obj[k] !== null) eachRecursive(obj[k]);
      else if (typeof obj[k] === "number" && obj[k] % 2 === 0) {
        sum += obj[k];
      }
    }
  }
  eachRecursive(obj);
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj2)); // 6
// nestedEvenSum(obj2); // 10
