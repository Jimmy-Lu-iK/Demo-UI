const todoListReducer = (state=[], action) = {
  switch (action.type) {
    case 'FETCH_TODOLIST':
      return action.payload
  }
}