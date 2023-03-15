function TodoListItem({key, title, handleEdit}) {
  return <li key={key}>{title} <button onClick={() => handleEdit}>Edit</button></li>
}

export default TodoListItem