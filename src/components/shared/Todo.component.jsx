import React from 'react'
import ReactDOM from 'react-dom'


export default (props) => {
    const isCompleted = () => {
        const completed = <span className='glyphicon glyphicon-ok'></span>
        const notCompleted = <span className='glyphicon glyphicon-remove'></span>
        return (props.completed) ? completed : notCompleted
    }
    
    const style = {
        color: (props.completed) ? 'green' : 'red'
    }

    const onClickAction = () => {
        props.todoClickAction(props)
    }
    
    return(
        <div>
            <p style={style} onClick={onClickAction.bind(this)}>
                title: {props.title} {isCompleted()}
            </p>
        </div>
    )
}