import axios from "axios"
import { useEffect, useState } from "react"

function TodoList() {
  const [todolist, setTodolist] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3005/todolist').then((response) => {
      console.log(response.data)
      setTodolist(response.data)
    })
  },[])

  const renderedList = todolist.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  })


  return <div>
    <form>
      <label>add new todo</label>
      <input></input>
    </form>
    <ul>
        {renderedList}
    </ul>
  </div>
}

export default TodoList