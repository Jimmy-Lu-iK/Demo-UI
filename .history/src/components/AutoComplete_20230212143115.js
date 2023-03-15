import { useState } from "react"

function AutoComplete() {
  const [value, setValue] = useState('')

  const filmList = ['peace and Love',' hello baby', 'you should know me', 'help me']

  const handleChange = (e) => {
    console.log('filmList: ', content)
    console.log('filmList: ', content)
    setValue(e.target.value)
  }

  const filteredFilms = filmList.filter((film) => film.toLowerCase().includes(value.toLowerCase))

  const content= filteredFilms.map((film) => {
    return <div>{film}</div>
  })


  return <div>
    AutoComplete
    <input value={value} onChange={handleChange} />
    <div>
      {content}
    </div>
  </div>
}

export default AutoComplete