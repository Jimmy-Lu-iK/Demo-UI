import axios from "axios"
import { useEffect, useState } from "react"
import TodoListItem from "./TodoListItem"

function TodoList() {
  const [todolist, setTodolist] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3005/todolist').then((response) => {
      console.log(response.data)
      setTodolist(response.data)
    })
  },[])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {id: todolist.length+1, title:value, isComplete: false}
    axios.post('http://localhost:3005/todolist', newTodo).then((response) => {
      console.log(response.data)
    })
    setValue('')
    setTodolist([...todolist, newTodo])
  }

  const handleEdit = (key,value) => {
    const updateTodoIndex = todolist.findIndex((todo) => todo.id = key)
    if(value) {
      console.log('first part:', ...todolist.slice(0,updateTodoIndex))
      console.log(...todolist.slice(updateTodoIndex+1,todolist.length))
      setTodolist([...todolist.slice(0,updateTodoIndex), {id: key, title: value, isComplete: false}, ...todolist.slice(updateTodoIndex+1,todolist.length)])
    } else {
      setTodolist([...todolist.slice(0,updateTodoIndex), ...todolist.slice(updateTodoIndex+1,todolist.length)])
    }
  }

  const renderedList = todolist.map((todo) => {
    return <TodoListItem key={todo.id} title={todo.title} handleEdit={handleEdit} />
  })

  return <div>
    <form onSubmit={handleSubmit}>
      <label>add new todo</label>
      <input value={value} onChange={handleChange} />
      <button>add</button>
    </form>
    <ul>
        {renderedList}
    </ul>
  </div>
}

export default TodoList