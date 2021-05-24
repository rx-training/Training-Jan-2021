import React from 'react'
import StudentForm, { StdentForm } from './components/StudentForm'
import DisplayDetails from './components/DisplayDetails'
import './App.css'

const App = () => {
    return (
        <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        {/* {<StudentForm />} */}
                        <StdentForm />
                    </div>
                        <DisplayDetails />
                </div>
            </div>
    )
}

export default App