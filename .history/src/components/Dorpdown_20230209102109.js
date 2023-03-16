import { useState } from "react"
import Option from "./Option"

function Dropdown() {
  const [options, setOptions] = useState(['item1','item2'])
  const [select, setSelect] = useState('')
  const [open, setOpen] = useState(false)
  const [add, setAdd] = useState(false)
  const [value, setValue] = useState('')

  const handleChoose = (option) => {
    setSelect(option)
    setOpen(false)
  }

  const handleAdd = (event) => {
    console.log(event)
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

  const hanldeEdit = (option,index) => {
    
  }

  const displayContent = <div>{select} <button onClick={hanldeOpen}>{'<'}</button></div>

  // const optionsContent = options.map((option) => {
  //   return <li onClick={(e) => hanldeChoose(option,e)}>{option} <button onClick={() => hanldeEdit(option)}>Edit</button></li>
  // })

  const optionsContent = options.map((option) => {
    return <Option 
            option={option} 
            options={options} 
            setOptions={setOptions} 
            key={option} 
            handleChoose={handleChoose} 
            handleEdit={hanldeEdit}
          />
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