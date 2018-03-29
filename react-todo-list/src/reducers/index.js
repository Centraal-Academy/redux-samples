import { combineReducers } from 'redux'

function reducerTodoList (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload.text]
    case 'COMPLETE_TODO':
      return state.filter((todo, index) => index !== action.payload.index)
    default:
      return state
  }
}

function reducerCompletedList (state = [], action) {
  switch (action.type) {
    case 'ADD_COMPLETE':
      return [...state, action.payload.text]
    default:
      return state
  }
}
export const rootReducer = combineReducers({
  todos: reducerTodoList,
  completed: reducerCompletedList
})
