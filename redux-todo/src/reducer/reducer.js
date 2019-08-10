import { UPDATE_TITLE, ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions'

const initialState = {
    title: 'Todo List',
    todos: [
        {todo: 'create new todo', completed: true, id: 1557863125236},
        {todo: 'Edit Todo List title', completed: false, id: 1557863025236}
    ]
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_TITLE: 
            return {
                ...state,
                title: action.payload
            }
        case ADD_TODO: 
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {todo: action.payload, completed: false, id: Date.now()}
                ]
            }
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer