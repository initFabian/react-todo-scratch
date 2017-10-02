import React from 'react'
import ReactDOM from 'react-dom'
import {Col, Row} from 'react-bootstrap'

export default (props) => {
    const isCompleted = () => {
        const completed = <span className='glyphicon glyphicon-ok'></span>
        const notCompleted = <span className='glyphicon glyphicon-remove'></span>
        return (props.completed) ? completed : notCompleted
    }
    
    const style = {
        color: (props.completed) ? 'green' : 'red'
    }

    const onClickAction = (e) => {
        e.preventDefault()
        props.todoClickAction(props)
    }
    
    const onRemoveAction = () => {
        props.removeTodoAction(props)
    }
    
    return(
        <Row>
            <Col xs={2} style={style} onClick={onClickAction.bind(this)}>
                title: {props.title} {isCompleted()}
            </Col>
            <Col xs={1}>
                <a href="#" onClick={onRemoveAction.bind(this)}>Remove</a>
            </Col>
        </Row>
    )
}