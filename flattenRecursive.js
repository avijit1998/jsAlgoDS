function flatten(arr) {
  let flatArr = [];
  function flat(arr) {
    if (arr.length === 0) {
      return;
    }
    if (Array.isArray(arr)) {
      arr.forEach((element) => {
        if (typeof element === "number") {
          flatArr.push(element);
        } else {
          flat(element);
        }
      });
    } else if (typeof arr === "number") {
      flatArr.push(arr);
    }
  }
  flat(arr);
  return flatArr;
}

// flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
