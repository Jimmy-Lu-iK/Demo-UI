import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTodoList } from "../actions"

function TodoListRedux({todoList}) {
  useEffect(()=>{
    fetchTodoList()
  },[])

  return <div>
    {todolist.map((todo) => {
    return <TodoListItem key={todo.id} id={todo.id} title={todo.title} handleEdit={handleEdit} />
    }
  })
  </div>
}

export default connect((state) => state.todoList)(TodoListRedux)