import { useState } from "react"

function AutoComplete() {
  const [value, setValue] = useState('')

  const filmList = ['peace and Love',' hello baby', 'you should know me', 'help me']

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const content= filmList.filter((film) => {film.toLowerCase().includes(value.toLowerCase)}).map((film) => {
    return <div>{film}</div>
  })


  return <div>
    AutoComplete
    <input value={value} onChange={handleChange} />
    <div>

    </div>
  </div>
}

export default AutoComplete