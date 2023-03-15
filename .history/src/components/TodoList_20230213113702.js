import axios from "axios"
import { useEffect, useState } from "react"

function TodoList() {
  const [todolist, setTodolist] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3005/todolist')
  })


  return <div>
    TodoList
  </div>
}

export default TodoList