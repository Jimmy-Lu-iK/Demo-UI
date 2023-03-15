function Word({sentence}) {
  let wordsMap = new Map();

  let wordsArray = sentence.split(' ')

  wordsArray.forEach((word) => {
    if(wordsMap.get(word)) {
      wordsMap.set(word, wordsMap.get(word)+1)
    } else {
      wordsMap.set(word, 1)
    }
  })

  wordsMap.forEach(function(value, key, map) {
    console.log(`${key}--->${value}`)
  })


  return <div>
    word
  </div>
}