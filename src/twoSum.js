// find 2 values in the array that equates to the value of the sum
const twoSum = (numArray, sum) => {
  const pairs = []
  const hashTable = numArray

  numArray.map(num => {
    const counterPart = sum - num
    // check if current number is already in the hashTable
    if (hashTable.indexOf(counterPart) >= 0) {
      pairs.push([num, counterPart])
    }
  })

  return pairs
}

twoSum([1, 2, 3, 4, 5, 6, 2, 1, 3], 10)
