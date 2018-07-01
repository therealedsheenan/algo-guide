
// reversing strings
const reverseString = (str) => {
  let reversedStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }
  return reversedStr
}

// reversing words in the sentence and not the whole sentence
const reverseWords = (string) => {
  const stringArr = string.split(' ')
  let reverseWordsArr = []

  stringArr.map((word, idx) => reverseWordsArr.push(reverseString(word)))

  return reverseWordsArr.join(' ')
}

reverseWords('reverse only the words and not the whole string')
