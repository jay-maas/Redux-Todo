import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleCompleted, deleteTodo } from '../actions'
import corona from '../assets/images/corona.png'
import coronaReverse from '../assets/images/coronaReverse.png'
import bobMarley from '../assets/images/bobMarley.png'

class Todos extends React.Component {
    state = {
        newTodo: ''
    }
    handleChanges = e => {
        this.setState({ newTodo: e.target.value })
    }
    addTodo = e => {
        e.preventDefault()
        this.props.addTodo(this.state.newTodo)
        this.setState({ newTodo: '' })
    }
    toggleCompleted = id => {
        this.props.toggleCompleted(id)
    }
    deleteTodo = id => {
        this.props.deleteTodo(id)
    }
    beerToggle = () => this.props.todos && this.props.todos.filter(todo => {
        return todo.completed === true
    }) 
    render() {
        let beerToggle = this.beerToggle()
        beerToggle = beerToggle.length === this.props.todos.length
        let bobToggle = this.props.todos.length === 0
        console.log(bobToggle)
        return (
            <>
                {this.props.todos && this.props.todos.map(todo => (
                    <div 
                    className="Todo"
                    onMouseEnter={() => document.getElementById(`${todo.id}`).style.display = "initial"}
                    onMouseLeave={() => document.getElementById(`${todo.id}`).style.display = "none"}
                    key={todo.id} 
                    style={{
                        width: '100%%', 
                        display: 'flex', 
                        position: 'relative'}}
                        >
                        <div>
                            <p style={{
                            textDecoration: `${todo.completed ? 'line-through' : 'none'}`, 
                            width: '100%', 
                            cursor: 'pointer',
                            textShadow: '11px 4px 10px black',
                            fontSize: '1.6em'}} 
                            onClick={() => this.toggleCompleted(todo.id)}
                            >
                                {todo.todo}
                            </p>
                        </div>
                        <span id={todo.id} style={{ fontSize: '1.6em', display: 'none', cursor: 'no-drop', position: 'absolute', right: '0', bottom: '50%'}}onClick={() => this.deleteTodo(todo.id)}
                        >
                            x
                        </span>
                    </div>
                ))}
                {this.props.todos.length < 3 ? 
                    <div>
                        <form onSubmit={this.addTodo}>
                            <input
                                className="InputTodo"
                                type="text"
                                value={this.state.newTodo}
                                onChange={this.handleChanges}
                                placeholder="Add New Todo"
                            />
                        </form>
                        <button onClick={this.addTodo}>Add Todo</button>
                    </div> : <><p style={{fontSize: '1em', width: '75%', textShadow: 'none', filter: 'invert(1)', fontWeight: '800'}}>You can only have 3 todos on this app, because you are at the beach, and you should relax...Try completing all your todos or deleting them!</p><img style={{position: 'absolute', left: '0', bottom: '0', maxHeight: '80vh'}}src={corona} alt="corona"/>
                    
                    </>
                }
                {beerToggle ? <img style={{position: 'absolute', right: '0', bottom: '0', maxHeight: '80vh'}}src={coronaReverse} alt="corona"/> : null }

                {bobToggle ? <><img style={{position: 'absolute', left: '0', bottom: '0', maxHeight: '80vh'}}src={bobMarley} alt="bobMarley"/> <embed 
                            style={{ opacity: '0'}}
                            src= "https://a.tumblr.com/tumblr_lr49ls0X7L1qej9iso1.mp3"
                            loop="false"
                            autostart="true"
                            mastersound/> </>: null }
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleCompleted, deleteTodo })(Todos)