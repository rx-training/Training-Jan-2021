import React, { Component } from 'react'
import {BrowserRouter as  Router , Route , Switch} from 'react-router-dom'
import StudentService from '../services/StudentService'
import StudentDetails from './StudentDetails'
// import {BrowserHistory} from 'react-router'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import StudentListItem from './StudentListItem'
export default class Student extends Component {
   
    render() {
       
        return (
            <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={StudentList}></Route>
                    <Route path="/add-student/:id" exact component={StudentForm}></Route>
                    <Route path="/students" exact component={StudentList}></Route>
                    <Route path="/show-details/:id" component={StudentListItem}></Route>
                </Switch>
            </div>
            </Router>
        )
        
    }
}

