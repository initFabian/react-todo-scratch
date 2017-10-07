import * as React from 'react'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { connect, Dispatch } from 'react-redux'
import { TodoAction } from '../../store/actions/types.action'
import { SetVisibilityFilter } from '../../store/actions/todo.action'

interface FooterState {
    filter: {
        isCompleted: boolean
    }
}

interface FooterProps {
    isCompleted: boolean
    onUpdateFilter(): void;
}

const mapStateToProps = (state: FooterState) => ({
    isCompleted: state.filter.isCompleted || false
})

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
    onUpdateFilter() {
        dispatch(
            SetVisibilityFilter()
        )
    }
})

const Footer = (props: FooterProps) => {
    const onClickAction = (e: React.FormEventHandler<ToggleButton>) => {
        props.onUpdateFilter()
    }
    const value = (props.isCompleted) ? 'completed' : 'all'

    return (
        <ToggleButtonGroup type="checkbox" defaultValue={value}>
            <ToggleButton value='completed' onChange={onClickAction.bind(this)}>Completed</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
