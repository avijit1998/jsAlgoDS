function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let i = 0;
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[i] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    i++;
  }
  return maxSum;
}

maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
