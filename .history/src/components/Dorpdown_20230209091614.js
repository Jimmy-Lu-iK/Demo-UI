import { useState } from "react"

function Dropdown() {
  const [options, setOptions] = useState([])
  const [select, setSelect] = useState('')
  const [open, setOpen] = useState(false)

  const handleClick = () => {

  }

  const optionsContent = options.map((option) => {
    return <li>{option}</li>
  })

  return <div>
    Dropdown
  </div>
}

export default Dropdown