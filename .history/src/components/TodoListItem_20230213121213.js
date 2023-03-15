import { useState } from "react"

function TodoListItem({key, title, handleEdit}) {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState(title)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    setIsEdit(true)
  }

  return <li key={key}>
    {isEdit ? <input disabled={!isEdit} value={value} onChange={handleChange}/> : title }
    <button onClick={handleClick}>Edit</button>
  </li>
}

export default TodoListItem