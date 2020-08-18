function getDigit(number, n) {
  return Math.floor((number / Math.pow(10, n - 1)) % 10);
}

function digitCount(x) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    let digitsBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitsBucket[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitsBucket);
  }
  return nums;
}
console.log(radixSort([223, 1223, 12, 1, 45, 979, 3453]));
