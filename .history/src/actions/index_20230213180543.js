import axios from "axios";

export const fetchTodoList = () => async dispatch => {
  const response = await axios.get('http://localhost:3005/todolist') ;

  dispatch({
    type: 'FETCH_TODOLIST',
    payload: response.data
  })
} 

export const addTodoList = (id, value) => async dispatch => {

  let newTodo = {id, title:value, isComplete: false}
  
  const response = await axios.post(`http://localhost:3005/todolist/${id}`, {id, title: value, isCompleted: false}) ;

  dispatch({
    type: 'ADD_TODOLIST',
    payload: {id, title: value, isCompleted: false}
  })
} 