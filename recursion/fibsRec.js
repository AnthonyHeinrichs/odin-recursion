const fibsRec = (num, arr = [0, 1]) => {
  if (arr.length >= num) {
    return arr.slice(0, num);
  }
  let sum = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(sum);
  return fibsRec(num, arr);
}

console.log('Fibonacci numbers up to 8', fibsRec(8))
console.log('Fibonacci numbers up to 12', fibsRec(16))
console.log('Fibonacci numbers up to 32', fibsRec(32))
