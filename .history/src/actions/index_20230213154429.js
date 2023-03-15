import axios from "axios";

export const fetchTodoList = () => async dispatch => {
  const response = await axios.get('/posts') ;

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
} 