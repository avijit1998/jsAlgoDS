function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      let temp = arr[i];
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }
  arr[start] = arr[swapIdx];
  arr[swapIdx] = pivot;
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 5, 3, 2, 1, 8, 7, 6]));
