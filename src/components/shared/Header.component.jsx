import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addTodo } from '../../constants/actions'

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({
    onAddTodo(title) {
        dispatch(
            addTodo(title)
        )
    }
})

const Header = (props) => {
    let textInput = null;

    const handleClick = () => {
        props.onAddTodo(textInput.value)
        textInput.value = ''
    }

    return (
        <div>
            <h1>Add TODO</h1>
            <input type="text" ref={ input => textInput = input }/>
            <Button bsStyle="success" bsSize="small" onClick={handleClick.bind(this)}>
                Add
            </Button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
