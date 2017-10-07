import { connect, Dispatch } from 'react-redux'
import { TodoAction } from '../store/actions/types.action'
import { AddTodo } from '../store/actions/todo.action'
import Header from '../components/shared/Header.component'

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
    onAddTodo(title) {
        dispatch(
            AddTodo(title)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
