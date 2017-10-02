import React from 'react'
import ReactDOM from 'react-dom'
import {Col, Row} from 'react-bootstrap'
import { connect } from 'react-redux'
import { clearError } from '../constants/actions'

const mapStateToProps = (state, props) => ({
    messages: state.errors
})

const mapDispatchToProps = dispatch => ({
    onClearError(index) {
        dispatch(
            clearError(index)
        )
    }
})

const Error = (props) => {
    const removeErrorClick = () => {
        props.onClearError(props.id)
    }

    return(
        <Row style={{marginLeft: 10}}>
            <Col xs={7} style={{color: 'red'}}>
                {props.message}
            </Col>
            <Col xs={1}>
                <a href="#" onClick={removeErrorClick.bind(this)}><span className='glyphicon glyphicon-remove'></span></a>
            </Col>
        </Row>
    )
}

const ErrorList = (props) => {
    const removeErrorAtIndex = (index) => {
        props.onClearError(index)
    }

    const errorList = props.messages.map((message, i) => {
        console.log(message)
        return <Error message={message} key={i} id={i} onClearError={removeErrorAtIndex} />
    })

    return (
        <Row>
            {errorList}
        </Row>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(ErrorList)
