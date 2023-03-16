import { useState } from "react"

function AutoComplete() {
  const [value, setValue] = useState('')

  const fileList = ['peace and Love',' hello baby', 'you should know me', 'help me']

  const handleChange = (e) => {
    setValue(e.target.value)
  }


  return <div>
    AutoComplete
    <input value={value} onChange={handleChange} />
    <div>
      
    </div>
  </div>
}

export default AutoComplete