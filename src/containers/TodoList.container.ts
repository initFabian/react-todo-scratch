import {
    RemoveTodo,
    UpdateTodo
} from '../store/actions/todo.action'
import TodoListComponent from '../components/shared/TodoList.component'
import { connect, Dispatch } from 'react-redux'
import { StoreState } from '../store/types'

const mapStateToProps = (state: StoreState) => {

    if (state.filter.isCompleted) {
        console.log('filter is on!')
        return ({
            todos: state.todos.filter(todo => todo.completed)
        })
    }

    return ({
        todos: state.todos
    })
}


function mapDispatchToProps<T>(dispatch: Dispatch<T>) {
    return {
        onRemoveTodo(index: number) {
            dispatch(
                RemoveTodo(index)
            )
        },
        onUpdateTodo(index: number) {
            console.log(`updating todo at index: ${index}`)
            dispatch(
                UpdateTodo(index)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)
