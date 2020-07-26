// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  let total = 0;
  function adder(num) {
    if (num === 0) {
      return 0;
    }
    return total + num + adder(num - 1);
  }
  return adder(num);
}

console.log(recursiveRange(10));
