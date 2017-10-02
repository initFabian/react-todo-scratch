import C from '../constants/constants'
import { combineReducers } from 'redux'

// Filter 

export const filter = (state = { isCompleted: false }, action) => {
    switch (action.type) {
        case C.FILTER_COMPLETED_TODO:
            return {
                isCompleted: !state.isCompleted
            }
        default:
            return state
    }
}

// Todos
export const todo = (state, action) => {
    if (action.type === C.ADD_TODO) {
        return action.payload
    }
    return state
}

export const allTodos = (state = [], action) => {
    switch (action.type) {
        case C.ADD_TODO:
            const hasTodo = state.some(todo => todo.title === action.payload.title)

            return (hasTodo) ? state : [
                ...state,
                todo(null, action)
            ]
        case C.UPDATE_TODO:
            return state.map((todo, i) => {
                if (i === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })

        case C.REMOVE_TODO:
            return state.filter((todo, i) => i !== action.payload)
        default:
            return state
    }
}

// Errors

export const errors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ]
        case C.CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
}

export default combineReducers({
    filter,
    todos: allTodos,
    errors
})