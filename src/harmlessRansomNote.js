const harmlessRansomNote = (noteText, magazineText) => {
  // convert strings to array
  const noteArr = noteText.split(' ')
  const magazineTextArr = magazineText.split(' ')

  const magazineObj = {}
  /*
  * sample result:
  * magazineObj = {
  *   this: 1,
  *   is: 1,
  *   a: 1,
  *   text: 1
  * }
  */
  magazineTextArr.map((magazineWord) => {
    if (!magazineObj[magazineWord]) {
      magazineObj[magazineWord] = 0
    }
    // counts the number of instances a single word is repeated in the variable.
    magazineObj[magazineWord]++
  })

  let noteIsPossible = true
  // check every instances of word from note's word
  noteArr.map((noteWord) => {
    // decerement if a word is in the magazineObj
    if (magazineObj[noteWord]) {
      magazineObj[noteWord]--
      if (magazineObj[noteWord] < 0) {
        noteIsPossible = false
      }
    } else {
      noteIsPossible = false
    }
  })
  return noteIsPossible
}

harmlessRansomNote('dfsa', 'note note note this is a note')
