import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleCompleted } from '../actions'

class TodoList extends React.Component {
    state = {
        newTodo: ''
    }
    handleChanges = e => {
        this.setState({ newTodo: e.target.value })
    }
    addTodo = e => {
        e.preventDefault()
        this.props.addTodo(this.state.newTodo)
        this.setState({ newTodo: ''})
    }
    toggleCompleted = id => {
        this.props.toggleCompleted(id)
    }
    render() {
        return (
            <>
                {this.props.todos && this.props.todos.map(todo => (
                    <div key={todo.id} style={{cursor: 'pointer'}}><p style={{textDecoration: `${todo.completed ? 'line-through' : 'none'}`}}onClick={() => this.toggleCompleted(todo.id)}>{todo.todo} </p></div>
                ))}
                <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeholder="Add New Todo"
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleCompleted })(TodoList)