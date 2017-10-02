import * as React from 'react'
import Header from './shared/Header.component'
import Footer from './shared/Footer.component'
import TodoListContainer from '../containers/TodoList.container'
import ErrorContainer from '../containers/Error.container'

export default (props: any) => (
    <div style={{ marginLeft: 10 }}>
        <ErrorContainer />
        <Header />
        <TodoListContainer />
        <Footer />
    </div>
)
