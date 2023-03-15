import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTodoList } from "../actions"

function TodoListRedux({todoList, fetchTodoList}) {
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

// const mapStateToProps = state => {
//   return { todoList: state.todoList };
// }


export default connect((state) => {todoList: state.todoList}, { fetchTodoList })(TodoListRedux)