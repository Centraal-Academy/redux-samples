/* global Redux */

/* action types */
const ADD = 'ADD'
const SUBSTRACT = 'SUBSTRACT'

/* actions creators */
function add (value) {
  return {
    type: ADD,
    value
  }
}

function substract (value) {
  return {
    type: SUBSTRACT,
    value
  }
}

const initialState = {
  counter: 0
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {counter: state.counter + action.value})
    case 'SUBSTRACT':
      return Object.assign({}, state, {counter: state.counter - action.value})
    default:
      return state
  }
}

const middlewareLog = (store) => (next) => (action) => {
  console.log(action)
  return next(action)
}

const middlewareValidate = (store) => (next) => (action) => {
  if (store.getState().counter === 0 && action.type === SUBSTRACT) {
    console.log('El counter menor que 0')
  } else {
    next(action)
  }
}

const store = Redux.createStore(
  reducer,
  Redux.applyMiddleware(
    middlewareValidate,
    middlewareLog
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  document.getElementById('result').innerText = store.getState().counter
})

document.getElementById('add').addEventListener('click', (e) => {
  e.preventDefault()
  store.dispatch(add(1))
})
document.getElementById('substract').addEventListener('click', (e) => {
  e.preventDefault()
  store.dispatch(substract(1))
})
