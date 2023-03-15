const todoListReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_TODOLIST':
      return action.payload;
    case 'ADD_TODOLIST':
      return [...state, action.payload];
    case 'REMOVE_TODOLIST':
      console.log('state', state)
      console.log('action.payload.updateIndex', action.payload)
      console.log('[...state.slice(0,action.payload.updateIndex)', [...state.slice(0,action.payload.updateIndex)])
      console.log('[...state.slice(action.payload.updateIndex+1)', [...state.slice(action.payload.updateIndex +1)])
      console.log('hlll: ',[...state.slice(0,action.payload), ...state.slice(action.payload+1)])
      return [...state.slice(0,action.payload.updateIndex), ...state.slice(action.payload.updateIndex+1)];
    case 'UPDATE_TODOLIST':
      return [...state.slice(0,action.payload.updateIndex), action.payload.newTodo, ...state.slice(action.payload.updateIndex+1)];
    default:
      return state;
  }
};

export default todoListReducer