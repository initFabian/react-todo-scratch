import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { TodoType } from '../../store/types'

interface TodoComponentProps {
    key: number
    id: number
    todo: TodoType
    todoClickAction(number): void
    removeTodoAction(number): void
}

export default (props: TodoComponentProps) => {
    const isCompleted = () => {
        const completed = <span className='glyphicon glyphicon-ok'></span>
        const notCompleted = <span className='glyphicon glyphicon-remove'></span>
        return (props.todo.completed) ? completed : notCompleted
    }

    const style = {
        color: (props.todo.completed) ? 'green' : 'red'
    }

    const onClickAction = (e) => {
        e.preventDefault()
        props.todoClickAction(props.id)
    }

    const onRemoveAction = () => {
        props.removeTodoAction(props.id)
    }

    return (
        <Row>
            <Col xs={2} style={style} onClick={onClickAction.bind(this)}>
                title: {props.todo.title} {isCompleted()}
            </Col>
            <Col xs={1}>
                <a href="#" onClick={onRemoveAction.bind(this)}>Remove</a>
            </Col>
        </Row>
    )
}