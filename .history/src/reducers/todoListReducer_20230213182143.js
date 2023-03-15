const todoListReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_TODOLIST':
      return action.payload;
    case 'ADD_TODOLIST':
      return [...state, action.payload];
    case 'UPDATE_TODOLIST':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoListReducer