import React from 'react'
import autobind from 'autobind-decorator'
import TodoListComponent from '../components/shared/TodoList.component'
import todoData from '../data/todos.data'

export default class TodoListContainer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            todos: todoData
        }
    }

    @autobind
    updateTodoAtIndex(index) {
        const todos = this.state.todos.map((todo, idx) => {
            if(idx === index) {
                todo.completed = !todo.completed
            }
            return todo
        })

        this.setState({
            todos
        })
    }

    render() {
        return ( 
            <div>
                <TodoListComponent 
                    todos={this.state.todos}
                    updateTodoAtIndex={this.updateTodoAtIndex}
                /> 
            </div>
        )
    }
}
