function minSubArrayLen(arr, num) {
  let i = 0,
    j = 0,
    minSum = 0;
  while (minSum < num) {
    minSum += arr[j];
    j++;
    if (j === arr.length) {
      return 0;
    }
  }
  let count = j;
  j--;
  while (j < arr.length) {
    if (i > j) {
      break;
    }
    if (minSum >= num) {
      if (count > j - i + 1) {
        count = j - i + 1;
      }
      minSum = minSum - arr[i];
      i++;
    } else if (minSum < num) {
      j++;
      minSum = minSum + arr[j];
    }
  }
  return count;
}

minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);
