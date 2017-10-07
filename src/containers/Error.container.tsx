import { connect, Dispatch } from 'react-redux'
import { ErrorAction } from '../store/actions/types.action'
import { ClearError } from '../store/actions/error.action'
import ErrorList from '../components/shared/ErrorList.component'

interface ErrorListState {
    errors: Array<String>
}

const mapStateToProps = (state: ErrorListState) => ({
    messages: state.errors
})

const mapDispatchToProps = (dispatch: Dispatch<ErrorAction>) => ({
    onClearError(index: number) {
        dispatch(
            ClearError(index)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorList)
