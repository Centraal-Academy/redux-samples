/* global Redux */
const ADD_TODO = 'ADD_TODO'

function addTodo (text) {
  return {
    type: ADD_TODO,
    text
  }
}

function todosReducer (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text]
    default:
      return state
  }
}

const rootReducer = Redux.combineReducers({
  todos: todosReducer
})

const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  const listTodos = document.getElementById('task-list')
  const todos = store.getState().todos
  listTodos.innerHTML = todos.reduce((previousValue, actualValue) => `${previousValue}<li>${actualValue}</li>`, '')
})

document.getElementById('form-add-task').addEventListener('submit', (e) => {
  e.preventDefault()
  const taskElement = document.getElementById('task-text')
  const { value: text } = taskElement
  taskElement.value = ''
  store.dispatch(addTodo(text))
})
