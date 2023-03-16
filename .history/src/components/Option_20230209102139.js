import { useState } from "react"

function Option({option, handleChoose}) {
  const [editable, setEditable] = useState(false)
  const [value, setValue] = useState('')

  const hanldeEdit = (option,e) => {
    e.stopPropagation()
    setEditable(true)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setOptions([...options, value])
  }

  return <div>{editable 
    ? <form onSubmit={hanldeSubmit}><label>New</label><input value={value} onChange={handleChange}></input><button>Add</button></form>
    : <li onClick={() => handleChoose(option)}>{option} <button onClick={(e) => hanldeEdit(option,e)}>Edit</button></li>
  }
  </div>
}

export default Option