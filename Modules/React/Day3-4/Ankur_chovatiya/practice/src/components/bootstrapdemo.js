import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Bootstrapdemo extends Component {
    render() {
        return (
            <div>
                <Button className="mr-3" variant="primary">Primary</Button><br></br>
                <Button className="mr-4" variant="secondary">Secondary</Button>
                <Button variant="dark">Dark</Button>
            </div>
        )
    }
}
