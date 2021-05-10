import React from 'react'
import defaultStudent from '../../../assets/IMG-20200328-WA0074.jpg'

const StudentPhoto = (props) => {

    return <img 
        src={ props.image || defaultStudent } 
        className="student-img" 
        alt="studentImg"
        ></img>
}

export default StudentPhoto