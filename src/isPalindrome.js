const isPalindrome = (string) => {
  string = string.toLowerCase()

  const charactersArr = string.split('') // convert strings to array
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('') // convert valid chars to an array

  // filter only valid characters. Special characters should not be included
  const lettersArr = charactersArr.filter(char => validCharacters.indexOf(char) >= 0)

  // check if it's a palindrome
  if (lettersArr.join('') === lettersArr.reverse().join('')) {
    return true
  }
  return false
}

isPalindrome('race car') // true
isPalindrome('not a palindrome') // false
