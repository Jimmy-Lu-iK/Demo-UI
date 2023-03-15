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
  
  await axios.post(`http://localhost:3005/todolist/`, newTodo) ;

  dispatch({
    type: 'ADD_TODOLIST',
    payload: newTodo
  })
} 

export const updateTodoList = (id, value) => async (dispatch, getState) => {

  let newTodo = {id, title:value, isComplete: false}
  let updateIndex = getState().todolist.findIndex((todo) => todo.id === id)
  console.log('updateIndex: ', updateIndex)
  
  await axios.post(`http://localhost:3005/todolist/`, newTodo) ;

  dispatch({
    type: 'UPDATE_TODOLIST',
    payload: {newTodo, updateIndex}
  })
} 