function TodoListItem({key, title, handleEdit}) {
  const [isEdit, setIsEdit] = useState(false)

  return <li key={key}><input disabled={isEdit}/> <button onClick={() => handleEdit(key)}>Edit</button></li>
}

export default TodoListItem