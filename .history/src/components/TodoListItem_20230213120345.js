function TodoListItem({key, title, handleEdit}) {
  return <li key={key}>{title} <button onClick={() => handleEdit(key)}>Edit</button></li>
}

export default TodoListItem