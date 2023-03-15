function TodoListItem({key, title, handleEdit}) {
  const [isEdit, setIsEdit] = useState(false)

  return <li key={key}><input disabled={isEdit} value={title}/> <button onClick={() => handleEdit(key)}>Edit</button></li>
}

export default TodoListItem