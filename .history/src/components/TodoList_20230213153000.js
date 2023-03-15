import axios from "axios"
import { useEffect, useState } from "react"
import TodoListItem from "./TodoListItem"
import useGet from "../hooks/useGet"

function TodoList() {
  //const [todolist, setTodolist] = useState([])
  const [value, setValue] = useState('')

  const {loading, error, todolist, setTodolist} = useGet()

  // useEffect(() => {
  //   fetchTodoList()
  // },[])

  // const fetchTodoList = async function() {
  //   await axios.get('http://localhost:3005/todolist').then((response) => {
  //     console.log(response.data)
  //     setTodolist(response.data)
  //   })
  // }

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

  const handleEdit = (id,value) => {
    const updateTodoIndex = todolist.findIndex((todo) => todo.id === id)

    if(value) {
      console.log('hello: ', todolist.slice(0,updateTodoIndex).concat([{id: id, title: value, isComplete: false}]).slice(updateTodoIndex+1))
      setTodolist([...todolist.slice(0,updateTodoIndex), {id: id, title: value, isComplete: false}, ...todolist.slice(updateTodoIndex+1,todolist.length)])
      axios.patch(`http://localhost:3005/todolist/${id}`,{id:id, title:value, isComplete: false})
    } else {
      setTodolist([...todolist.slice(0,updateTodoIndex), ...todolist.slice(updateTodoIndex+1,todolist.length)])
      axios.delete(`http://localhost:3005/todolist/${id}`)
    }
  }

  const renderedList = todolist.map((todo) => {
    return <TodoListItem key={todo.id} id={todo.id} title={todo.title} handleEdit={handleEdit} />
  })


  return <div>
    <form onSubmit={handleSubmit}>
      <label>add new todo</label>
      <input value={value} onChange={handleChange} />
      <button>add</button>
    </form>
    { todolist.length !== 0 && <ul>{renderedList}</ul> }
    
  </div>
}

export default TodoList