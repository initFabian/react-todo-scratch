import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('todos', store.getState().todos.length)
    result = next(action)

    let { todos, errors } = store.getState()

    console.log(`
        todos: ${JSON.stringify(todos)}
        errors: ${errors}
    `)

    console.groupEnd()

    return result
}

export default (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}