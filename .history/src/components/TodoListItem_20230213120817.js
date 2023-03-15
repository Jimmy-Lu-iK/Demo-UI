import { useState } from "react"

function TodoListItem({key, title, handleEdit}) {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState(title)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return <li key={key}><input disabled={isEdit} value={value} onChange={handleChange}/> <button onClick={() => handleEdit(key)}>Edit</button></li>
}

export default TodoListItem