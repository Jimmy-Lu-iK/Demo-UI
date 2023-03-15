function TodoListItem({key, title, handleEdit}) {
  return <li key={key}><input /> <button onClick={() => handleEdit(key)}>Edit</button></li>
}

export default TodoListItem