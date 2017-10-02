import React from 'react'
import { BrowserRouter as Router, Route, IndexRoute, HashRouter } from 'react-router-dom'
import App from './components/'
import TodoListContainer from './containers/TodoList.container'

const routes = (
    <Router>
        <Route path="/" component={App}/>
    </Router>
)

export default routes