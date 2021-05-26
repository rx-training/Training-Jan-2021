import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class StudentListItem extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            id : this.props.match.params.id,
            student : {}
        }
    }
    

    componentDidMount(){
        console.log(this.state.id);
        StudentService.getStudentById(this.state.id).then((res)=>{
           console.log(res.data);
            this.setState({
                student : res.data
            } , () => console.log(this.props))
        })
    }
   
    addStudent = () =>{
        this.props.history.push('/add-student/add');
    }
    showList = () =>{
        this.props.history.push('/students/')
    }

    render() {
        // console.log();
        const {student} = this.state
        console.log(student);
              return (
                  <div className="text-center d-flex justify-content-center">
            <div className="card my-3" style={{width:"50rem" , backgroundColor:"lightsalmon"}}>
               
                <div className="card-body">
                    <img src={student.Img} width="150px" height="150px"></img>
                    <h5 className="card-tite"><b>Name</b> :{student.firstName +" " +student.lastName} </h5>
                    <p><b>DOB :</b>  {student.dob} </p>
                    <p><b>Place of Birth : </b> {student.birthPlace} </p>
                    <p><b>Language : </b> {student.language}</p>
                    <p><b>Address : </b> { student.city + " ," + student.state + " - " + student.pincode}</p><hr />
                    <h5 className="mb-4"><b>College Details</b></h5>
                    <p><b>Name : </b> {student.collegeName}</p>
                    <p><b>Address : </b> {student.collegeAddress}</p>
                    <img src={student.collegeLogo} width="150px" height="130px"></img><hr />
                    <h5 className="mb-4"><b>Father's Details</b></h5>
                    <p><b>Name : </b>{student.FfirstName + " " +student.FmiddleName + " " +student.FlastName} </p>
                    <p><b>Contact : </b> {student.FphoneNo} </p>                    
                        <p><b>Email : </b>{student.Femail} </p>
                        <p><b>Education : </b>{student.Fedu} </p>
                        <p><b>Frofession : </b>{student.Fprofession} </p>
                        <p><b>Designation : </b>{student.Fdesignation} </p><hr />
                        <h5 className="mb-4"><b>Mother's Details</b></h5>
                        <p><b>Name : </b>{student.MfirstName +" " +student.MmiddleName +" " + student.MlastName} </p>
                        
                        <p><b>Email : </b>{student.Memail} </p>
                        <p><b>Education : </b>{student.Medu} </p>
                        <p><b>Profession : </b>{student.Mprofession} </p>
                        <p><b>Designation : </b>{student.Mdesignation} </p>
                        <p><b>Contact : </b>{student.MphoneNo} </p> <hr />
                        <h5 className="mb-4"><b>Emargancy Conatct</b></h5>

                        <p><b>Relation : </b>{student.Relation1} </p>
                        <p><b>Contact NO : </b>{student.RphoneNo1} </p>
                        <p><b></b>{student.Relation2} </p>
                        <p><b></b>{student.RphoneNo2} </p> <hr/> 

                       
                        <h5 className="mb-4"><b>Reference Details</b></h5>
                        <p><b>Name : </b>{student.RefName} </p>
                        <p><b>Contact No : </b>{student.RefPhoneNo} </p>
                        <p><b>Address : </b>{student.RefAddress} </p>
                        
                   
                    <button className="btn btn-danger mx-4" onClick={() => {this.showList()}} >Go to List</button>
                    <button className="btn btn-primary" onClick={() => {this.addStudent()}}>Add Student</button>
                </div>
            </div>
            </div>
        )
    }
}
