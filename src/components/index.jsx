import React from 'react'
import ReactDOM from 'react-dom'
import Header from './shared/Header.component'
import Footer from './shared/Footer.component'
import TodoListContainer from '../containers/TodoList.container'
import ErrorContainer from '../containers/Error.container'

export default (props) => (
    <div style={{marginLeft: 10}}>
        <ErrorContainer />
        <Header />
        <TodoListContainer />
        <Footer />
    </div>
)
