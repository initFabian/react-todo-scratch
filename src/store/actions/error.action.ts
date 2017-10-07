import { AddError, ClearError } from './types.action'
import * as C from '../../constants/constants'

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
