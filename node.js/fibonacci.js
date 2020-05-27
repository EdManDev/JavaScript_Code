function fibonacci(num) {
  if (num < 1) {
    return 1;
  }
  const result = fibonacci(num - 1) + fibonacci(num - 2);
  console.log(`${result}`);
  // console.log(`fib(${num}): ${result}`);
  return result;
}
const fib = fibonacci(5);
