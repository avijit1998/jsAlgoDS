// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
let result = 1;
function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return result * arr[0] * productOfArray(arr.slice(1));
}
