function collectStrings(obj) {
  let arr = [];
  function recursiveAdd(obj) {
    for (var k in obj) {
      if (typeof obj[k] === "object") {
        recursiveAdd(obj[k]);
      } else if (typeof obj[k] === "string") {
        arr.push(obj[k]);
      }
    }
  }
  recursiveAdd(obj);
  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
