import * as C from './constants'

export interface AddTodo {
    type: C.ADD_TODO
    payload: string
}

export interface ToggleTodo {
    type: C.TOGGLE_TODO
    payload: number
}

export interface RemoveTodo {
    type: C.REMOVE_TODO
    payload: number
}

export interface SetVisibilityFilter {
    type: C.SET_VISIBILITY_FILTER
}

export type TodoAction = AddTodo | SetVisibilityFilter | ToggleTodo | RemoveTodo

export interface AddError {
    type: C.ADD_ERROR
    payload: string
}

export interface ClearError {
    type: C.CLEAR_ERROR
    payload: number
}

export function AddTodo(title: string): AddTodo {
    return {
        type: C.ADD_TODO,
        payload: title
    }
}

export function UpdateTodo(index: number): ToggleTodo {
    return {
        type: C.TOGGLE_TODO,
        payload: index
    }
}

export function RemoveTodo(index: number): RemoveTodo {
    return {
        type: C.REMOVE_TODO,
        payload: index
    }
}

export function FilterCompletedTodos(): SetVisibilityFilter {
    return {
        type: C.SET_VISIBILITY_FILTER
    }
}

export type ErrorAction = AddError | ClearError

export function AddError(message: string): AddError {
    return {
        type: C.ADD_ERROR,
        payload: message
    }
}

export function ClearError(index: number): ClearError {
    return {
        type: C.CLEAR_ERROR,
        payload: index
    }
}
