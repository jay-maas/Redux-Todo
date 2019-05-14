import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleCompleted, deleteTodo } from '../actions'

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
    deleteTodo = id => {
        this.props.deleteTodo(id)
    }
    render() {
        return (
            <>
                {this.props.todos && this.props.todos.map(todo => (
                    <div key={todo.id} style={{width: '25%', display: 'flex', position: 'relative'}}><div><p style={{width: '100%', textDecoration: `${todo.completed ? 'line-through' : 'none'}`, width: '100%', cursor: 'pointer'}} onClick={() => this.toggleCompleted(todo.id)}>{todo.todo}</p></div><span style={{cursor: 'no-drop', position: 'absolute', right: '0'}}onClick={() => this.deleteTodo(todo.id)}>x</span></div>
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

export default connect(mapStateToProps, { addTodo, toggleCompleted, deleteTodo })(TodoList)