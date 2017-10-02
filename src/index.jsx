import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import storeFactory from './store/store'
import todoData from './constants/todos.data'
import { addError } from './constants/actions'
import { Provider } from 'react-redux'

const initialState = (localStorage['redux-store']) ? 
    JSON.parse(localStorage['redux-store']) :
    todoData

const saveState = () => localStorage['redux-store'] = JSON.stringify(store.getState())

const handleError = error => {
    store.dispatch(
        addError(error.message)        
    )
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

window.addEventListener('error', handleError)

ReactDOM.render( 
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
)
