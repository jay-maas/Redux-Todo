export const UPDATE_TITLE = 'UPDATE_TITLE'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const updateTitle = newTitle => {
    return {
        type: UPDATE_TITLE,
        payload: newTitle
    }
}

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}
export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}