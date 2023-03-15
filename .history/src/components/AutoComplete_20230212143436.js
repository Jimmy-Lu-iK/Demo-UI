import { useState } from "react"

function AutoComplete() {
  const [value, setValue] = useState('')

  const filmList = ['peace and Love',' hello baby', 'you should know me', 'help me']

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const filteredFilms = filmList.filter((film) => {
    return film.toLowerCase().includes(value.toLowerCase())
  })

  const content= filteredFilms.map((film) => {
    return <div onClick={handleClick}>{film}</div>
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