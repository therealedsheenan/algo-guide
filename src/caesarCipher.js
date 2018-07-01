// num = number to be used to add index from str variable
const caesarCipher = (str, num) => {
  const CHAR_NUM = 26
  num = num % CHAR_NUM // LOOP BACK
  const lowerCaseString = str.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const indexLimit = alphabet.length - 1
  let newString = ''

  for (let i = 0; i < lowerCaseString.length; i++) {
    const currentLetter = lowerCaseString[i]

    // add space character
    if (currentLetter === ' ') {
      newString += currentLetter
      continue
    }

    const currIndex = alphabet.indexOf(currentLetter)
    let newIndex = currIndex + num

    // loop back if index is more than alphabet length
    if (newIndex > indexLimit) {
      newIndex = newIndex - CHAR_NUM
    }

    // loop back if index is a negative numbre
    if (newIndex < 0) {
      newIndex = newIndex + CHAR_NUM
    }

    // capitalize or not
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    } else {
      newString += alphabet[newIndex]
    }
  }
  return newString
}

caesarCipher('THIS IS A TEXT', 300)
