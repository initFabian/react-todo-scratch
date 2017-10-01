import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../shared/Header.component'
import TodoListContainer from '../../containers/TodoList.container'


export default (props) => (
    <div>
        <Header />
        <TodoListContainer />
    </div>
)
