function stringifyNumbers(obj) {
  let newObj = {};
  for (var k in obj) {
    if (typeof obj[k] === "number") {
      newObj[k] = obj[k].toString();
    } else if (typeof obj[k] == "object" && !Array.isArray(obj[k])) {
      newObj[k] = stringifyNumbers(obj[k]);
    } else {
      newObj[k] = obj[k];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
