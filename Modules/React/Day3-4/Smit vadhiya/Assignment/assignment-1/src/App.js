import React, { Component } from 'react'
import './App.css';
import StudentIDs from './components/studentId/studentID';
import info from './components/studentId/studentData'



export default class App extends Component {

  render() {
    return (
      <StudentIDs info = {info}/>
    )
  }
}
