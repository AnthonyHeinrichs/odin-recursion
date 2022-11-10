

const mergeSort = (arr) => {
  // Check if array is less than 2, if not, return
  if (arr.length <= 1) {
    return arr
  }
  // Split arr (array) as evenly as possible
  const midOfArr = Math.floor(arr.length / 2)
  // Get left sub array
  const leftArr = arr.slice(0, midOfArr)
  // Get right sub array
  const rightArr = arr.slice(midOfArr)
  // Pass to the merge function with recursion to get the smallest number
  return mergeArrays(mergeSort(leftArr), mergeSort(rightArr))
}

const mergeArrays = (leftArr, rightArr) => {
  let sortedArray = []

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArray.push(leftArr.shift())
    } else {
      sortedArray.push(rightArr.shift())
    }
  }

  return sortedArray.concat([...leftArr]).concat([...rightArr])
}

console.log(mergeSort([9,7]))
console.log(mergeSort([7,3,6,4,5,1]))
console.log(mergeSort([9,6,23,20,144,2,10]))
console.log(mergeSort([9,34,62,5463,232523,235,391,364,2652,3,5,34,8]))