import React from 'react'

function TodoList (props) {
  return (
    <ul>
      { props.todos.map((todo, index) => <li onClick={() => props.onClick(todo, index)}>{todo}</li>) }
    </ul>
  )
}

export default TodoList
