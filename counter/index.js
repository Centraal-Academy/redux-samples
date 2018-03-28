/* global Redux */

function reducer (state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.value
    case 'SUBSTRACT':
      return state - action.value
    default:
      return state
  }
}

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  document.getElementById('result').innerText = store.getState()
})

document.getElementById('add').addEventListener('click', (e) => {
  e.preventDefault()
  store.dispatch({ type: 'ADD', value: 1 })
})
document.getElementById('substract').addEventListener('click', (e) => {
  e.preventDefault()
  store.dispatch({ type: 'SUBSTRACT', value: 1 })
})
