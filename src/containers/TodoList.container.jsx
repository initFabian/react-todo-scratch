import React from 'react'
import { updateTodo, removeTodo } from '../constants/actions'
import TodoListComponent from '../components/shared/TodoList.component'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
    return ({
        todos: state.todos
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

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)
export default TodoListContainer
