import axios from "axios";

export const fetchTodoList = () => async dispatch => {
  const response = await axios.get('http://localhost:3005/todolist') ;

  dispatch({
    type: 'FETCH_TODOLIST',
    payload: response.data
  })
} 

export const fetchTodoList = () => async dispatch => {
  const response = await axios.get('http://localhost:3005/todolist') ;

  dispatch({
    type: 'FETCH_TODOLIST',
    payload: response.data
  })
} 