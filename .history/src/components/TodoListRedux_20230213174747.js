import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTodoList } from "../actions"

function TodoListRedux({todoList, fetchTodoList}) {
  useEffect(()=>{
    fetchTodoList()
  },[fetchTodoList])

  return <div>
    <form onSubmit={handleSubmit}>
      <label>add new todo</label>
      <input value={value} onChange={handleChange} />
      <button>add</button>
    </form>
    {
    todoList.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>
    })
    }
  </div>
}

const mapStateToProps = state => {
  return { todoList: state.todoList };
}


export default connect(mapStateToProps, { fetchTodoList })(TodoListRedux)