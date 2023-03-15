import { useState } from "react"

function Option({option, options,setOptions}) {
  const [editable, setEditable] = useState(false)
  const [value, setValue] = useState('')

  const hanldeEdit = () => {
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
    : <li>{option} <button onClick={() => hanldeEdit(option)}>Edit</button></li>
  }
  </div>
}

export default Option