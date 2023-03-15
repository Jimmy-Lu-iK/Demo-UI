import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTodoList } from "../actions"

function TodoListRedux({todoList, }) {
  useEffect(()=>{
    fetchTodoList()
  },[])

  return <div>
    {
    todoList.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>
    })
    }
  </div>
}

export default connect((state) => state.todoList, fetchTodoList)(TodoListRedux)