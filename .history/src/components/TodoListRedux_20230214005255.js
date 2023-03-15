import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTodoList, addTodoList, updateTodoList } from "../actions"
import TodoListItemRedux from "./TodoListItemRedux"
import TodoListItem from './TodoListItem'

function TodoListRedux({todoList, fetchTodoList, addTodoList, updateTodoList}) {
  const [value, setValue] = useState('')

  useEffect(()=>{
    fetchTodoList()
  },[fetchTodoList])

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoList(todoList.length+1, value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleEdit = (id, value) => {
    
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label>add new todo</label>
      <input value={value} onChange={handleChange} />
      <button>add</button>
    </form>
    {
    todoList.map((todo) => {
      return <TodoListItem key={todo.id} id={todo.id} title={todo.title} handleEdit={updateTodoList}  />
    })
    }
  </div>
}

const mapStateToProps = state => {
  return { todoList: state.todoList };
}


export default connect(mapStateToProps, { fetchTodoList, addTodoList, updateTodoList })(TodoListRedux)