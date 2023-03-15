const todoListReducer = (state=[], action) = {
  switch (action.type) {
    case 'FETCH_TODOLIST':
      return action.payload;
    default:
      return state;
  }
}

export default todoListReducer

const todoListReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
    return action.payload;
    default:
      return state;
  }
};

export default todoListReducer