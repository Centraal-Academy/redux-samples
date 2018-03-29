import React from 'react'
import TodoList from '../TodoList'
import CompleteList from '../CompleteList'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todoText: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    const text = this.state.todoText
    this.props.dispatch({type: 'ADD_TODO', payload: { text }})
  }

  handleChange (event) {
    this.setState({ todoText: event.target.value })
  }

  removeElement (element, index) {
    this.props.dispatch({ type: 'ADD_COMPLETE', payload: { text: element } })
    this.props.dispatch({ type: 'COMPLETE_TODO', payload: { index } })
  }

  render () {
    return (
      <section>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} value={this.state.todoText} />
        </form>
        <TodoList todos={this.props.todos} onClick={this.removeElement.bind(this)} />
        <CompleteList completed={this.props.completed} />
      </section>
    )
  }
}

function mapStateToProps (state) {
  return {
    todos: state.todos,
    completed: state.completed
  }
}

export default connect(mapStateToProps)(App)
