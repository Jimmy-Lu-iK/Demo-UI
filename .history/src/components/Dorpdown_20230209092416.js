import { useState } from "react"

function Dropdown() {
  const [options, setOptions] = useState([])
  const [select, setSelect] = useState('')
  const [open, setOpen] = useState(false)
  const [add, setAdd] = useState(false)
  const [value, setValue] = useState('')

  const handleClick = () => {

  }

  const hanldeChoose = () => {

  }

  const hanldeEdit = () => {

  }

  const handleAdd = () => {
    setAdd(true)
  }

  const handleChange = () => {

  }

  const optionsContent = options.map((option) => {
    return <li onClick={hanldeChoose}>{option} <button onClick={hanldeEdit}>Edit</button></li>
  })

  const addContent = add 
    ? <form><label>Value</label><input value={value} onChange={handleChange}></input></form> 
    : <li onClick={handleAdd}>Add</li> 

  return <div>
    {optionsContent}
    {addContent}
  </div>
}

export default Dropdown