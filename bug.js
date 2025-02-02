function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This is incorrect. Should handle undefined case
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(undefined, 2)); //NaN, should be 0