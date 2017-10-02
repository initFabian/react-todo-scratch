import * as React from 'react'
import Todo from './Todo.component'

export default (props) => {

    const todoClickAction = (todo) => {
        props.onUpdateTodo(todo.id)
    }

    const removeTodoAction = (todo) => {
        props.onRemoveTodo(todo.id)
    }

    const todos = props.todos.map((todo, idx) => {
        const todoProps = {
            key: idx,
            removeTodoAction,
            todoClickAction,
            ...todo
        }
        return <Todo {...todoProps} />
    })

    return (
        <div>
            <h1>TODOs</h1>
            <div>
                {todos}
            </div>
        </div>
    )
}