import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTodoList } from "../actions"

function TodoListRedux({todoList}) {
  useEffect(()=>{
    fetchTodoList()
  },[])

  return <div>
    TodoListRedux
  </div>
}

export default connect((state) => state.todoList)(TodoListRedux)