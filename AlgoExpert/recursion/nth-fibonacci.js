function Fibonacci(num) {
  if (num < 2) {
    return num;
  }
  let first = 0;
  let second = 1;
  for (let i = 2; i <= num; i++) {
    let temp = first;
    first = second;
    second = temp + second;
  }
  return second;
}

console.log(Fibonacci(6));
