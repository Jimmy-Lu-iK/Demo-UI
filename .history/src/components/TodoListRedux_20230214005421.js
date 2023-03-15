import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTodoList, addTodoList, updateTodoList, removeTodoList } from "../actions"
import TodoListItemRedux from "./TodoListItemRedux"
import TodoListItem from './TodoListItem'

function TodoListRedux({todoList, fetchTodoList, addTodoList, updateTodoList, removeTodoList}) {
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
    const updateTodoIndex = todolist.findIndex((todo) => todo.id === id)
    
    if(value) {
      updateTodoList(id, value)
    } else {
      removeTodoList(id)
    }
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label>add new todo</label>
      <input value={value} onChange={handleChange} />
      <button>add</button>
    </form>
    {
    todoList.map((todo) => {
      return <TodoListItem key={todo.id} id={todo.id} title={todo.title} handleEdit={handleEdit}  />
    })
    }
  </div>
}

const mapStateToProps = state => {
  return { todoList: state.todoList };
}


export default connect(mapStateToProps, { fetchTodoList, addTodoList, updateTodoList, removeTodoList })(TodoListRedux)