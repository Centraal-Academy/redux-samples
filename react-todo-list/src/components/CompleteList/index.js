import React from 'react'

function CompleteList (props) {
  return (
    <ul>
      { props.completed.map(done => <li>{done}</li>) }
    </ul>
  )
}

export default CompleteList
