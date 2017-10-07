import * as React from 'react'
import { Button } from 'react-bootstrap'

export default (props) => {
    let textInput: HTMLInputElement

    const handleClick = () => {
        props.onAddTodo(textInput.value)
        textInput.value = ''
    }

    return (
        <div>
            <h1>Add TODO</h1>
            <input type="text" ref={input => textInput = input!} />
            <Button bsStyle="success" bsSize="small" onClick={handleClick.bind(this)}>
                Add
            </Button>
        </div>
    )
}
