import { useEffect } from "react"
import { fetchTodoList } from "../actions"

function TodoListRedux() {
  useEffect(()=>{
    fetchTodoList()
  })

  return <div>
    TodoListRedux
  </div>
}

export default TodoListRedux