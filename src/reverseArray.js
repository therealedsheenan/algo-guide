// reversing array in place
const reverseArray = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    const tempVar = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = tempVar
  }
  return array
}

reverseArray(['1', '2', '3'])
