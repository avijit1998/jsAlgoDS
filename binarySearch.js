function binarySearch(arr, val) {
  let left = 0,
    right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (arr[mid] !== val && left <= right) {
    if (arr[mid] > val) {
      right = mid - 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === val ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 6));
