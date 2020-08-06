function bubbleSort(arr) {
  let swap;
  for (let i = arr.length - 1; i >= 0; i--) {
    swap = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}

console.log(bubbleSort([1231, 456, 78, 234, 123]));
