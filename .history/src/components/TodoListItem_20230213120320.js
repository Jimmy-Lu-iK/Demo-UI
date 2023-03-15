function TodoListItem({key, title, handleEdit}) {
  return <li key={key}>{title} <button onClick={handleClick}>Edit</button></li>
}

export default TodoListItem