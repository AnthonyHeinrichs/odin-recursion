

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
  // Setting an empty array to push in sorted numbers
  let sortedArray = []
  // Checking that both leftArr and rightArr are not 'undefined'
  while (leftArr.length && rightArr.length) {
    // Comparing the first element of the leftArr and rightArr for which element is less than the other.
    if (leftArr[0] < rightArr[0]) {
      // If the first ele of leftArr is less than the first ele of the rightArr, push out first ele of leftArr to sorted array
      sortedArray.push(leftArr.shift())
    } else {
      // Else, first ele of rightArr must be less than first ele of leftArr, push out first ele of rightArr to sorted array
      sortedArray.push(rightArr.shift())
    }
  }
  // Merge the remainder of both leftArr and rightArr
  return sortedArray.concat([...leftArr]).concat([...rightArr])
}

// Console logs showing the result of a list of a unsorted array going through merge sort algo
console.log(mergeSort([9,7]))
console.log(mergeSort([7,3,6,4,5,1]))
console.log(mergeSort([9,6,23,20,144,2,10]))
console.log(mergeSort([9,34,62,5463,232523,235,391,364,2652,3,5,34,8]))