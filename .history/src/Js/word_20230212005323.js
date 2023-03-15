function Word({sentence}) {
  let wordsMap = new Map();

  let wordsArray = sentence.split(' ')

  wordsArray.forEach((word) => {
    if(wordsMap.get(word)) {
      wordsMap.set(word, wordsMap.get(word)+1)
    } else {
      
    }
  })


  return <div>
    word
  </div>
}