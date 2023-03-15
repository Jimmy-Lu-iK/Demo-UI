import { useState } from "react"

function Option({option}) {
  const [editable, setEditable] = useState(false)

  const hanldeEdit = () => {
    setEditable(true)
  }

  return <div>{editable 
    ? <form onSubmit={hanldeSubmit}><label>New</label><input value={value} onChange={handleChange}></input><button>Add</button></form>
    : <li>{option} <button onClick={() => hanldeEdit(option)}>Edit</button></li>
  }
  </div>
}

export default Option