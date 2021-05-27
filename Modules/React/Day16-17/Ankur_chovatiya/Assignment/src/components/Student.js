import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import StudentLsitItem from './StudentLsitItem'
function Student() {
    return (

        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={StudentList}> </Route>
                    <Route path="/add-student/:id" exact component={StudentForm}></Route>
                    <Route path="/students" exact component={StudentList}></Route>
                    <Route path="/show-details/:id" exact component={StudentLsitItem}></Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default Student
