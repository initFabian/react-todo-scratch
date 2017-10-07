import * as C from '../../constants/constants'
import { AddTodo, ToggleTodo, RemoveTodo, SetVisibilityFilter } from './types.action'

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

export function SetVisibilityFilter(): SetVisibilityFilter {
    return {
        type: C.SET_VISIBILITY_FILTER
    }
}
