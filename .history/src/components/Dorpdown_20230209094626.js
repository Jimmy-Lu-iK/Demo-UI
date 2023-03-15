import { useState } from "react"
import Option from "./Option"

function Dropdown() {
  const [options, setOptions] = useState([])
  const [select, setSelect] = useState('')
  const [open, setOpen] = useState(false)
  const [add, setAdd] = useState(false)
  const [value, setValue] = useState('')

  const hanldeChoose = (option) => {
    setSelect(option)
    setOpen(false)
  }

  const hanldeEdit = (option) => {

  }

  const handleAdd = () => {
    setAdd(true)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setOptions([...options, value])
    setAdd(false)
  }

  const hanldeOpen = () => {
    setOpen(!open)
  }

  const displayContent = <div>{select} <button onClick={hanldeOpen}>{'<'}</button></div>

  const optionsContent = options.map((option) => {
    return <li onClick={() => hanldeChoose(option)}>{option} <button onClick={() => hanldeEdit(option)}>Edit</button></li>
  })

  const optionsContent1 = options.map((option) => {
    return <Option option={option} options={options} setOptions={setOptions} onClick={() => hanldeChoose(option)} />
  })

  const addContent = add 
    ? <form onSubmit={hanldeSubmit}><label>New</label><input value={value} onChange={handleChange}></input><button>Add</button></form> 
    : <li onClick={handleAdd}>Add</li> 

  return <div>
    {displayContent}
    {open && optionsContent}
    {open && addContent}
  </div>
}

export default Dropdown