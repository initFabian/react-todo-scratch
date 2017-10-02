import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

// TODO: Add functionality to append to `todos`.
export default (props) => (
    <div>
        <Link to="dashboard">Dashboard</Link>
        <h1>Add TODO</h1>
        <input type="text"/>
        <Button bsStyle="success" bsSize="small">Add</Button>
    </div>
)
