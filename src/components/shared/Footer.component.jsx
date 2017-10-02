import React from 'react'
import ReactDOM from 'react-dom'
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import { connect } from 'react-redux'
import { filterCompletedTodos } from '../../constants/actions'

const mapStateToProps = (state, props) => ({
    isCompleted: state.filter.isCompleted || false
})

const mapDispatchToProps = dispatch => ({
    onUpdateFilter() {
        dispatch(
            filterCompletedTodos()
        )
    }
})

const Footer = (props) => {
    const onClickAction = (e) => {
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
