import React from 'react'
import { updateTodo, removeTodo } from '../constants/actions'
import TodoListComponent from '../components/shared/TodoList.component'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
    const indexTodos = state.todos.map((todo, i) => {
        todo.id = i
        return todo
    })

    
    if(state.filter.isCompleted) {
        console.log('filter is on!')
        return ({
            todos: indexTodos.filter(todo => todo.completed)
        })
    }

    return ({
        todos: indexTodos
    })
}

const mapDispatchToProps = dispatch => ({
    onRemoveTodo(index) {
        dispatch(
            removeTodo(index)
        )
    },
    onUpdateTodo(index) {
        console.log(`updating todo at index: ${index}`)
        dispatch(
            updateTodo(index)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)
