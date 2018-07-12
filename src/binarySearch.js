// Recursive functions = functions that calls itself

// Factorial: 4! = 4 * 3 * 2 * 1 = 24

const factorial = (num) => {
  if (num === 1) {
    return num
  } else {
    return num * factorial(num - 1)
  }
}

factorial(4)

// Binary search

const binarySearch = (numArray, key) => {
  const middleIndex = Math.floor(numArray.length / 2)
  const middleElement = numArray[middleIndex]

  if (middleElement === key) {
    return true
  } else if (middleElement < key && numArray.length > 1) {
    return binarySearch(numArray.slice(middleIndex, numArray.length), key)
  } else if (middleElement > key && numArray.length > 1) {
    return binarySearch(numArray.slice(0, middleIndex), key)
  } else {
    return false
  }
}

// search through array pointing to the middle of an array and cut it to half
// then recurse the half until it satisfy the base case
binarySearch([1, 2, 3, 4, 5, 6, 7, 99, 100], 10)
