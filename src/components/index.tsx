import * as React from 'react'
import Footer from './shared/Footer.component'
import TodoListContainer from '../containers/TodoList.container'
import ErrorContainer from '../containers/Error.container'
import HeaderContainer from '../containers/Header.container'

export default (props: any) => (
    <div style={{ marginLeft: 10 }}>
        <ErrorContainer />
        <HeaderContainer />
        <TodoListContainer />
        <Footer />
    </div>
)
