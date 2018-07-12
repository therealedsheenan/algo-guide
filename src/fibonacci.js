// fibonacci sequence: 1, 1, 2 ,3 , 5 , 8, 13, 21, 34 .....
// each item of the sequence is the sum of the previous 2 numbers

const fibonacci = (position) => {
  if (position < 3) {
    return 1
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2)
  }
}

fibonacci(4)
