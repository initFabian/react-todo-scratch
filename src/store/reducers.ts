import * as C from '../constants/constants'
import { combineReducers } from 'redux'
import { TodoType } from './types'

// Filter 

export const filter = (state = { isCompleted: false }, action) => {
    switch (action.type) {
        case C.SET_VISIBILITY_FILTER:
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
        return {
            title: action.payload,
            completed: false
        }
    }
    return state
}

export const allTodos = (state: Array<TodoType> = [], action) => {
    switch (action.type) {
        case C.ADD_TODO:
            const hasTodo = state.some(todo => todo.title === action.payload.title)

            return (hasTodo) ? state : [
                ...state,
                todo(null, action)
            ]
        case C.TOGGLE_TODO:
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