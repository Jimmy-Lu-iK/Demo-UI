import axios from "axios"

const useFetch = async function() {
  await axios.get('http://localhost:3005/todolist').then((response) => {
    return response.data
  })
}