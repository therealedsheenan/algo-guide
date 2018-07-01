// main function
const getMeanMedianMode = (array) => ({
  mean: getMean(array),
  median: getMedian(array),
  mode: getMode(array)
})

const getMean = (array) => Math.floor(array.reduce((acc, curr) => acc + curr, 0) / array.length)

const getMedian = (array) => {
  array.sort((a, b) => a - b)
  let median

  // if an array is even get the average of 2 middle values
  if (array.length % 2 === 0) {
    const mid1 = array[array.length / 2]
    const mid2 = array[(array.length / 2) - 1]
    median = Math.floor(mid1 + mid2) // average of two values
  } else {
    median = array[Math.floor(array.length / 2)] // middle value of an array
  }
  return median
}

const getMode = (array) => {
  let maxFrequentNumber = 0 // initial max frequent number(Object key NOT value)
  let modes = [] // actual modes
  const modeObj = {}

  /**
   * sample object:
   * const array = [1, 2, 3, 1]
   * {
   *   '1': 2,
   *   '2': 1,
   *   '3': 1
   * }
   */

  array.map(num => {
    if (!modeObj[num]) {
      modeObj[num] = 0
    }

    modeObj[num]++
  })

  Object.keys(modeObj).map((key, idx) => {
    // check max frequent key
    if (modeObj[key] > maxFrequentNumber) {
      modes = [key]
      maxFrequentNumber = modeObj[key]
    } else if (modeObj[key] === maxFrequentNumber) {
      modes.push(key)
    }
  })

  // everything is flat(no mode)
  if (modes.length === Object.keys(modeObj).length) {
    modes = []
  }

  return modes
}

getMeanMedianMode([1, 2, 3]) // no mode
getMeanMedianMode([1, 2, 1, 1]) // mode = [1]
getMeanMedianMode([1, 2, 2, 1]) // mode = [1 ,2]
