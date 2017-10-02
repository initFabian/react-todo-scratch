import * as React from 'react'
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import { connect } from 'react-redux'
import { filterCompletedTodos } from '../../constants/actions'

interface FooterState {
    filter: {
        isCompleted: boolean
    }
}

const mapStateToProps = (state: FooterState) => ({
    isCompleted: state.filter.isCompleted || false
})

const mapDispatchToProps = (dispatch: any) => ({
    onUpdateFilter() {
        dispatch(
            filterCompletedTodos()
        )
    }
})

const Footer = (props: any) => {
    const onClickAction = (e: any) => {
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
