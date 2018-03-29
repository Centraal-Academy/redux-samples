/* global Redux, fetch */

/* action types */
const FETCH_PENDING = 'FETCH_PENDING'
const FETCH_RESULT = 'FETCH_RESULT'

/* actions creators */
function makeFetch (url) {
  return {
    type: FETCH_PENDING,
    url
  }
}

function setResult (result) {
  return {
    type: FETCH_RESULT,
    result
  }
}

const initialState = {
  fetchPending: false,
  fetchResult: {}
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_PENDING:
      return Object.assign({}, state, {fetchPending: true})
    case FETCH_RESULT:
      return Object.assign({}, state, {fetchPending: false, fetchResult: action.result})
    default:
      return state
  }
}

const store = Redux.createStore(
  reducer,
  Redux.applyMiddleware(window.ReduxThunk.default),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  console.log(store.getState())
})

function makeRequest (url) {
  return function (dispatch) {
    dispatch(makeFetch(url))
    return fetch(url)
      .then(response => response.json())
      .then(response => dispatch(setResult(response)))
      .catch(response => dispatch(setResult(response)))
  }
}

document.getElementById('button').addEventListener('click', (e) => {
  e.preventDefault()
  const url = 'https://my-json-server.typicode.com/typicode/demo/posts'
  const request = makeRequest(url)
  store.dispatch(request)
})
