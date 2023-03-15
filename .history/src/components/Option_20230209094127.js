import { useState } from "react"

function Option() {
  const [editable, setEditable] = useState(false)

  return <div>
    <li onClick={() => hanldeChoose(option)}>{option} <button onClick={() => hanldeEdit(option)}>Edit</button></li>
  </div>
}

export default Option