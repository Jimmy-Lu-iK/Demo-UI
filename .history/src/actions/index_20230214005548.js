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
  console.log('getState(): ', getState())
  let updateIndex = getState().todoList.findIndex((todo) => todo.id === id)
  console.log('updateIndex: ', updateIndex)
  
  await axios.patch(`http://localhost:3005/todolist/${id}`, newTodo) ;

  dispatch({
    type: 'UPDATE_TODOLIST',
    payload: {newTodo, updateIndex}
  })
} 

export const removeTodoList = (id, updateIndex) => async (dispatch, getState) => {

  let updateIndex = getState().todoList.findIndex((todo) => todo.id === id)
  
  await axios.delete(`http://localhost:3005/todolist/${id}`) ;

  dispatch({
    type: 'REMOVE_TODOLIST',
    payload: updateIndex
  })
} 