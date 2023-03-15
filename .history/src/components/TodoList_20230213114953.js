import axios from "axios"
import { useEffect, useState } from "react"

function TodoList() {
  const [todolist, setTodolist] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3005/todolist').then((response) => {
      console.log(response.data)
      setTodolist(response.data)
    })
  },[])

  const renderedList = todolist.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  })

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {id: todolist.length+1, title:value, isComplete: false}
    axios.post('http://localhost:3005/todolist', newTodo).then((response) => {
      console.log(response.data)
    })
    setValue('')
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label>add new todo</label>
      <input value={value} onChange={handleChange} />
      <button>add</button>
    </form>
    <ul>
        {renderedList}
    </ul>
  </div>
}

export default TodoList