import { useState } from "react"

function AutoComplete() {
  const [value, setValue] = useState('')

  const handleChange = () {}
  


  return <div>
    AutoComplete
    <input value={value} onChange={handleChange} />
  </div>
}

export default AutoComplete