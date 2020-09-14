function countInversion(arr) {
  let count = 0;

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  function merge(arr1, arr2) {
    let result = [];
    let i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i++]);
      } else if (arr1[i] > arr2[j]) {
        result.push(arr2[j++]);
        count = count + (arr1.length - i);
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i++]);
    }

    while (j < arr2.length) {
      result.push(arr2[j++]);
    }
    return result;
  }

  mergeSort(arr);
  return count;
}
console.log(countInversion([2, 1, 3, 1, 2]));
