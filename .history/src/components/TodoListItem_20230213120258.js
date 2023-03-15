function TodoListItem({key, title, handleEdit}) {
  return <li key={key}>{title} <button>Edit</button></li>
}

export default TodoListItem