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
    })
  }
}