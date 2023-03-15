const todoListReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_TODOLIST':
      return action.payload;
    case 'ADD_TODOLIST':
      return [...state, action.payload];
    case 'REMOVE_TODOLIST':
      return [...state.slice(0,action.payload.updateIndex), action.payload];
    case 'UPDATE_TODOLIST':
      return [...state.slice(0,action.payload.updateIndex), action.payload.newTodo, ...state.slice(action.payload.updateIndex+1)];
    default:
      return state;
  }
};

export default todoListReducer