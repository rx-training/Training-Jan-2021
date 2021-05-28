import React, { Component } from 'react'
import StudentForm from './components/StudentForm'
import './App.scss'
import DisplayDetails from './components/DisplayDetails'
export default class App extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        {<StudentForm />}
                    </div>
                        <DisplayDetails />
                </div>
            </div>
        )
    }
}
