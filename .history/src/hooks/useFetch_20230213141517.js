

const useFetch = async function() {
  await axios.get('http://localhost:3005/todolist').then((response) => {
    console.log(response.data)
    setTodolist(response.data)
  })
}