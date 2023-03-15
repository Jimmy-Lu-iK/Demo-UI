import axios from "axios"
import { useEffect, useState } from "react"

export default function useGet() {
  const [todolist, setTodolist] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetchTodoList()
  },[])

  const fetchTodoList = async function() {
    
    await axios.get('http://localhost:3005/todolist').then((response) => {
      console.log(response.data)
      setTodolist(response.data)
      setLoading(false)
    }).catch((err) => setError(err))
  }

  const createTodoList = async function(newTodo) {
    await axios.post('http://localhost:3005/todolist', newTodo).then((response) => {
      console.log(response.data)
      setTodolist([...todolist, newTodo])
    }).catch((err) => setError(err))
  }

  const updateTodoList = async function(id, updateTodo, updateIndex) {
    axios.patch(`http://localhost:3005/todolist/${id}`,updateTodo).then((response) => {
      console.log(response.data)
      setTodolist([...todolist.slice(0,updateIndex), updateTodo, ...todolist.slice(updateIndex+1)])
    }).catch((err) => setError(err))
  }

  const deleteTodoList = async function(id) {
    axios.delete(`http://localhost:3005/todolist/${id}`).then((response) => {
      console.log(response.data)
      setTodolist(todolist.filter((todo) => todo.id !== id))
    }).catch((err) => setError(err))
  }

  return { loading, error, todolist, setTodolist, createTodoList, updateTodoList, deleteTodoList }
}