import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTodoList } from "../actions"

function TodoListRedux({todoList, fetchTodoList}) {
  useEffect(()=>{
    fetchTodoList()
  },[fetchTodoList])

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {id: todolist.length+1, title:value, isComplete: false}
    axios.post('http://localhost:3005/todolist', newTodo).then((response) => {
      console.log(response.data)
    })
    setValue('')
    setTodolist([...todolist, newTodo])
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


export default connect(mapStateToProps, { fetchTodoList })(TodoListRedux)