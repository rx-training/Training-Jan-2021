import React, { Component } from 'react'
import StudentsIdCard from './studentIdCard'



export default class StudentsList extends Component {

    constructor(props){
        super(props)
        this.img = [

            {url : `https://randomuser.me/api/portraits/med/men/${46}.jpg`} ,
            {url : `https://randomuser.me/api/portraits/med/men/${55}.jpg`},
            {url : `https://randomuser.me/api/portraits/med/men/${65}.jpg`},
            {url : `https://randomuser.me/api/portraits/med/men/${95}.jpg`},
            {url : `https://randomuser.me/api/portraits/med/men/${82}.jpg`}
        ]
        this.state = {
            students : [
            
            {
                id : 1,
                img : this.img[0].url ,
                name : "Raj Patel",
                rollno : 1856,
                class : "A2",
                marks : 280,
                address : "Ahmedabad"
            },{
                id : 2,
                img : this.img[1].url ,
                name : "Kishan Ramoliya",
                rollno : 7048,
                class : "A2",
                marks : 288,
                address : "surat"
            },{
                id : 3 ,
                img : this.img[2].url ,
                name : "Rohan Roy",
                rollno : 7000,
                class : "A1",
                marks : 290,
                address : "Rajkot"
            },
            {
                id : 4 ,
                img : this.img[3].url ,
                name : "Rohit Patel",
                rollno : 7000,
                class : "A1",
                marks : 295,
                address : "Mumbai"
            },
            {
                id : 5 ,
                img : this.img[4].url ,
                name : "john Roy",
                rollno : 7000,
                class : "A1",
                marks : 250,
                address : "London"
            }
        ]
    }
}
    
    

    handleDelete = (id) => {
        const sortedStudent = this.state.students.filter((std) => std.id !== id)
        this.setState({
            students : sortedStudent
        })
    }

    render(){
        return (
            <div>
                <StudentsIdCard students = {this.state.students} handleDelete={this.handleDelete}></StudentsIdCard>
            </div>
        )
    }

}
