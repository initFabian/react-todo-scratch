import React from 'react'
import ReactDOM from 'react-dom'
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap'

export default (props) => {
    const onClickAction = (e) => {
        // Dispatch Filter
        console.log(e.target.value)
    }
    
    return (
        <ToggleButtonGroup type="checkbox">
            <ToggleButton value={props.filterValue || 0} onChange={onClickAction.bind(this)}>Completed</ToggleButton>
        </ToggleButtonGroup>
    )
}
