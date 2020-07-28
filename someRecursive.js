// SAMPLE INPUT / OUTPUT
// const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// function someRecursive(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       return true;
//     }
//     return false;
//   }
// }

function someRecursive(arr, callback) {
  if (arr.length === 0) {
    return false;
  }
  return callback(arr[0]) ? true : someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([4, 6, 8], (val) => val > 10));
