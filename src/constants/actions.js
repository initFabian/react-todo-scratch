import C from './constants'

export const addTodo = (title) => ({
    type: C.ADD_TODO,
    payload: title
})

export const updateTodo = (index) => ({
    type: C.UPDATE_TODO,
    payload: index
})

export const addError = (message) => ({
    type: C.ADD_ERROR,
    payload: message
})

export const removeTodo = (index) => ({
    type: C.REMOVE_TODO,
    payload: index
})

export const clearError = (index) => ({
    type: C.CLEAR_ERROR,
    payload: index
})