import React, { Component } from 'react'
import StudentsIdCard2 from './studentIdCard2'



export default class StudentsList extends Component {

    constructor(){
        super()
        this.img = [

            {url : `https://randomuser.me/api/portraits/med/men/${46}.jpg`} ,
            {url : `https://randomuser.me/api/portraits/med/men/${55}.jpg`},
            {url : `https://randomuser.me/api/portraits/med/men/${65}.jpg`},
            {url : `https://randomuser.me/api/portraits/med/men/${95}.jpg`},
            {url : `https://randomuser.me/api/portraits/med/men/${82}.jpg`}
        ]
        this.state = [
            {
                id : 1,
                img : this.img[0].url ,
                name : "Raj Patel",
                rollno : 1856,
                class : "A2",
                marks : 280,
                address : "Ahmedabad"
            }
        ]
    }
 


    render() {
        return (
            <div>
                <StudentsIdCard2 students = {this.state}></StudentsIdCard2>
            </div>
        )
    }

}
