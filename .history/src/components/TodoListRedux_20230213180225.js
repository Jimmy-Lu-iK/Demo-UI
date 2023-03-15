import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTodoList, addTodoList } from "../actions"

function TodoListRedux({todoList, fetchTodoList, addTodoList}) {
  const [value, setValue] = useState('')

  useEffect(()=>{
    fetchTodoList()
  },[fetchTodoList])

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoList(todoList.length+1, )
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

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


export default connect(mapStateToProps, { fetchTodoList, addTodoList })(TodoListRedux)