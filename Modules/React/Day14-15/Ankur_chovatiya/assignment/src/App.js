import React,{useState} from 'react'
import {v4 as uuid} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormInput from './components/FormInput'
import StudentIdCard from './components/StudentIdCard'

export default function App() {
  const[studentlist,setStudentlist] = useState([]);
  const[values,setValues] = useState({
    id:uuid(),
    firstName:"",
    lastName:"",
    collegeName:"",
    collegeAddress:"",
    img:null,
    collegeLogo:null
  })

  const handleChange = e => {
    if(e.target.name==='img' || e.target.name==='collegeLogo'){
      setValues(p=>({...p,
      [e.target.name]:URL.createObjectURL(e.target.files[0])
      }))
    }
    else{
      setValues(p=>({...p,
      [e.target.name]:e.target.value
      }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      ImageUrl:values.img,
      StudentInfo:{
        ID:values.id,
        FirstName:values.firstName,
        LastName: values.lastName
      },
      CollegeInfo:{
        CollegeName: values.collegeName,
        CollegeAddress:values.collegeAddress,
        CollegeLogo:values.collegeLogo
      }
    }
    const updatedItem = [...studentlist,newItem];

    setStudentlist(updatedItem);

    setValues({
      id:uuid(),
      firstName:"",
      lastName:"",
      collegeName:"",
      collegeAddress:"",
      img:null,
      collegeLogo:null
    })
  }

  const handleDelete = id => {
    const remains = studentlist.filter((item)=>item.StudentInfo.ID!==id);
    setStudentlist(remains);
  }



  const{firstName,lastName,collegeAddress,collegeName} = values
  return (
    <div>
        <FormInput handleSubmit={handleSubmit} handleChange={handleChange} firstName={firstName} lastName={lastName} collegeName={collegeName} collegeAddress={collegeAddress} />
        <StudentIdCard StudentObj={studentlist} handleDelete={handleDelete}/>
    </div>
  )
}
