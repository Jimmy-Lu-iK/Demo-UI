import { useState } from "react"

function Option({option}) {
  const [editable, setEditable] = useState(false)

  const hanldeEdit = () => {
    setEditable(true)
  }

  return <div>
    <li>{option} <button onClick={() => hanldeEdit(option)}>Edit</button></li>
  </div>
}

export default Option