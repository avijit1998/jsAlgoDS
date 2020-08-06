function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minPos = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minPos]) {
        minPos = j;
      }
    }
    if (i !== minPos) {
      let temp = arr[i];
      arr[i] = arr[minPos];
      arr[minPos] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([1231, 456, 78, 234, 123]));
