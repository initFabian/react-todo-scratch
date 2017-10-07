import * as C from '../../constants/constants'

/*
ERROR INTERFACES
*/
export interface AddError {
    type: C.ADD_ERROR
    payload: string
}

export interface ClearError {
    type: C.CLEAR_ERROR
    payload: number
}

export interface AddTodo {
    type: C.ADD_TODO
    payload: string
}

/*
TODOS INTERFACES
*/
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


export type ErrorAction = AddError | ClearError
export type TodoAction = AddTodo | SetVisibilityFilter | ToggleTodo | RemoveTodo
