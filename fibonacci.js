// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  console.log(fibonacci(0, 1, n - 1));
}

function fibonacci(a, b, n) {
  if (n === 0) {
    return b;
  }
  return fibonacci(b, a + b, n - 1);
}
