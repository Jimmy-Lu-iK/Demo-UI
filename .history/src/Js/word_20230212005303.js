function Word({sentence}) {
  let wordsMap = new Map();

  let wordsArray = sentence.split(' ')

  wordsArray.forEach((word) => {
    if(wordsMap.has(word)) {
      wordsMap.set(word)
    }
  })


  return <div>
    word
  </div>
}