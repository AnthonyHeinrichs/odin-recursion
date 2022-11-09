const fibs = (n) => {
  let arr = [0,1]
  let num = n - 3 
  for (let i = 0; i <= num; i++) {
    let sum = arr[i] + arr[i+1]
    arr.push(sum)
  }
  return arr
}

console.log('Fibonacci numbers up to 8', fibs(8))
console.log('Fibonacci numbers up to 16', fibs(16))
console.log('Fibonacci numbers up to 32', fibs(32))
