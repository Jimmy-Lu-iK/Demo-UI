import { useState } from "react"

function TodoListItem({id, title, handleEdit}) {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState(title)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    setIsEdit(true)
  }

  const handleClickUpdate = () => {
    console.log('id: ', id, 'value: ', value)
    handleEdit(id,value)
    setIsEdit(false)
    setValue('')
  }

  return <li>
    {isEdit ? <input value={value} onChange={handleChange}/> : title }
    {isEdit ? <button onClick={handleClickUpdate}>Update</button> : <button onClick={handleClick}>Edit</button> }
  </li>
}

export default TodoListItem