import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo.component'

export default (props) => {

    const todoClickAction = (todo) => {
        props.updateTodoAtIndex(todo.id)
    }

    const todos = props.todos.map((todo,idx) => {
        const todoProps = {
            key: idx,
            todoClickAction,
            ...todo
        }
        return <Todo {...todoProps} />
    })

    return (
        <div style={{marginLeft: 10}}>
            <h1>TODOs</h1>
            <div>
            {todos}
            </div>
        </div>
    )
}