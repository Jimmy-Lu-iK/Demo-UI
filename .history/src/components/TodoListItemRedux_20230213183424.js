import { useState } from "react"
import { connect } from "react-redux"
import {updateTodoList} from '../actions'

function TodoListItemRedux({id, title, updateTodoList}) {
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
    updateTodoList(id,value)
    setIsEdit(false)
  }

  return <li>
    {isEdit ? <input value={value} onChange={handleChange}/> : title }
    {isEdit ? <button onClick={handleClickUpdate}>{value ? 'Update' : 'Delete'}</button> : <button onClick={handleClick}>Edit</button> }
  </li>
}

export default connect({},{updateTodoList})(TodoListItemRedux)