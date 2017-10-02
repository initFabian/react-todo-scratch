import React from 'react'
import ReactDOM from 'react-dom'
import Header from './shared/Header.component'
import Footer from './shared/Footer.component'
import TodoListContainer from '../containers/TodoList.container'

export default (props) => (
    <div style={{marginLeft: 10}}>
        <Header />
        <TodoListContainer />
        <Footer />
    </div>
)
