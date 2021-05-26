import React, { Component } from 'react'
import StudentForm from './studentForm'
import StudentList from './studentList'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Student extends Component {

    state = {
        students : [],
        id:'',
        firstName:'',
        img:'',
        lastName:'',
        collegeName:'',
        logo:''
    }

    handleChange = (e) =>{
        console.log(e.target.value);
        const value= e.target.value
        this.setState({
            [e.target.name]:value

        } )
    }

    handleSubmit = (e) =>{
        console.log(this.logo);
        const student = {
            id: this.state.id,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            img: `img/${this.state.img.split('fakepath')[1].slice(1)}`,
            collegeName : this.state.collegeName,
            logo: `img/${this.state.logo.split('fakepath')[1].slice(1)}`
        }
        console.log(student);
        const updatedStudents = [...this.state.students , student]
        this.setState({
            students : updatedStudents,
            id:'',
            firstName:'',
            lastName:'',
            img:'',
            collegeName:'',
            logo:''
        })
        e.preventDefault();
        console.log('form submited');
    }


    render() {
        return (
            <div>
                <StudentForm 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                id={this.state.id}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                img={this.state.img}
                collegeName={this.state.collegeName}
                logo={this.state.logo}
                ></StudentForm>

                <StudentList students={this.state.students}></StudentList>
            </div>
        )
    }
}
