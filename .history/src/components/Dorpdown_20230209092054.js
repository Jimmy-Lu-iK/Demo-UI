import { useState } from "react"

function Dropdown() {
  const [options, setOptions] = useState([])
  const [select, setSelect] = useState('')
  const [open, setOpen] = useState(false)
  const [add, setAdd] = useState(false)

  const handleClick = () => {

  }

  const hanldeChoose = () => {

  }

  const hanldeEdit = () => {

  }

  const optionsContent = options.map((option) => {
    return <li onClick={hanldeChoose}>{option} <button onClick={hanldeEdit}>Edit</button></li>
  })

  const addContent = <li>Add</li>

  return <div>
    {optionsContent}
    {addContent}
  </div>
}

export default Dropdown