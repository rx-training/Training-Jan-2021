import React, { Component } from 'react'
import PersonList from './Components/defaultProps/PersonList'
import Form from './Components/form/Form'

export default class App extends Component {
    render() {
        return (
            <div>
                <Form />
                <PersonList />
            </div>
        )
    }
}
