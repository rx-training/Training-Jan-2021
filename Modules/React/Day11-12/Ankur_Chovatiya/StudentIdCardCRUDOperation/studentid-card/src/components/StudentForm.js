import React, { Component } from 'react'
import StudentService from '../services/StudentService'
import {v4 as uuid} from 'uuid'
export default class StudentForm extends Component {

    state = {
        id : this.props.match.params.id,
        studentlist : [],
        firstName : '',
        middleName : '',
        lastName : '',
        dob : '',
        birthPlace : '',
        language : '',
        FfirstName : '',
        FmiddleName : '',
        FlastName : '' ,
        Femail : '' ,
        Fedu : '' ,
        Fprofession : '' ,
        Fdesignation : '',
        FphoneNo : '',
        MfirstName : '',
        MmiddleName : '',
        MlastName : '' ,
        Memail : '' ,
        Medu : '' ,
        Mprofession : '' ,
        Mdesignation : '',
        MphoneNo : '',
        Relation1 : '',
        RphoneNo1 : '',
        Relation2 : '',
        RphoneNo2 : '' ,
        RefName : '',
        RefPhoneNo : '',
        RefAddress : '',
        city:'',
        state: '',
        country : '',
        pincode : '',
        collegeName : '',
        collegeAddress : '',
        collegeLogo: null,
        Img : null,
        countries : [],
		states : [],
		cities : [],
		selectedCountry : '--Choose Country--',
		selectedState : '--Choose State--',
        ageValidation : true ,
        pincodeValidation : true ,
        FemailValidation : true ,
        MemailValidation : true ,
        FphoneValidation : true ,
        MphoneValidation : true ,
        EphoneValidation : true ,
        RphoneValidation : true ,
        isValid : false
    }

    componentDidMount(){

        StudentService.getStudentById(this.state.id).then((res)=>{
                    let student = res.data;
                    console.log(student);
                    this.setState({
                        firstName : student.firstName
                    } )
                })
        this.setState({
            countries : [
                { name: 'India', 
                states: [ 
                    {name: 'gujarat', cities: ['ahmedabad', 'vadodra']
                },
                {name: 'maharastra', cities: ['Mumbai']} 
                        ] 
                },

				{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
				{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
				{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
				{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
				{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
			]
        })
    }

    handleChange = (e) => {
        let field = e.target.name
        let value = e.target.value
        
        if(e.target.name=='Img' || e.target.name=='collegeLogo'){
            console.log(e.target.files[0].name);
            if(e.target.files[0] === undefined){
              this.setState({
                [e.target.name]:null
                })
            }
            else{
              this.setState({
              [e.target.name]:`http://localhost:3000/img/${e.target.files[0].name}`
              },()=>console.log(this.state.Img))
            }
          }
          else {
            this.setState({
            
                [e.target.name] : e.target.value  
          })
          }
        // age validation
        if(e.target.name=="dob"){
            const d =e.target.value.split('-');
            const selecteddate = parseInt(d[0]);
            const currentdate = parseInt(new Date().getFullYear())
            if((currentdate-selecteddate)<5 || (currentdate-selecteddate)>20){
              this.setState({
                ageValidation:false
              })
            }
            else{
              this.setState({
                ageValidation:true
              })
            }
          }
        
          // pincode validation
          if(e.target.name=="pincode"){
            if(e.target.value.match(/^\d{6}$/)){
              this.setState({
                pincodeValidation:true
              })
            }
            else{
              this.setState({
                pincodeValidation:false
              })
            }
          }

          // father's email validation
          if(e.target.name=="Femail"){
            if(e.target.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g)){
              this.setState({
                FemailValidation:true
              })
            }
            else{
              this.setState({
                FemailValidation:false
              })
            }
          }
          // mother's email validation  
      
          if(e.target.name=="Memail"){
            if(e.target.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g)){
              this.setState({
                MemailValidation:true
              })
            }
            else{
              this.setState({
                MemailValidation:false
              })
            }
          }
          // phone number validation
          if(e.target.name=="FphoneNo"){
            if(e.target.value.match(/^\d{10}$/)){
              this.setState({
                FphoneValidation:true
              })
            }
            else{
              this.setState({
                FphoneValidation:false
              })
            }
          }
      
          if(e.target.name=="MphoneNo"){
            if(e.target.value.match(/^\d{10}$/)){
              this.setState({
                MphoneValidation:true
              })
            }
            else{
              this.setState({
                MphoneValidation:false
              })
            }
          }
      
          if(e.target.name=="RphoneNo1"){
            if(e.target.value.match(/^\d{10}$/)){
              this.setState({
                EphoneValidation:true
              })
            }
            else{
              this.setState({
                EphoneValidation:false
              })
            }
          }
      
          if(e.target.name=="RefPhoneNo"){
            if(e.target.value.match(/^\d{10}$/)){
              this.setState({
                RphoneValidation:true
              })
            }
            else{
              this.setState({
                RphoneValidation:false
              })
            }
          }
        
          if(this.state.ageValidation && this.state.FemailValidation && this.state.MemailValidation && this.state.FphoneValidation && this.state.MphoneValidation && this.state.EphoneValidation && this.state.RphoneValidation && this.state.pincodeValidation ){
            this.setState({
                isValid : true
            })
          }

        

        if(field == 'country'){
            this.setState({
                [field]: value ,
                states : this.state.countries.find(cntry => cntry.name === e.target.value).states});
        }
        if(field == 'state'){
            const stats = this.state.countries.find(cntry => cntry.name === this.state.country).states;
		this.setState({
            [field] : value,
            cities : stats.find(stat => stat.name === e.target.value).cities});
        }
        // console.log('input changed');
    }
    validatefields = (field , value) =>{
        console.log( typeof(field));
        console.log(value.length);
        if(!isNaN(value)){   
            console.log('valid');
        }
        
    }


    handleSubmit = (e) =>{
        e.preventDefault();

      
        const student = {
            studentId : uuid(),
            firstName : this.state.firstName,
            lastName : this.state.lastName , 
            dob : this.state.dob,
            birthPlace : this.state.birthPlace,
        language : this.state.language,
        FfirstName : this.state.FfirstName,
        FmiddleName : this.state.FmiddleName,
        FlastName : this.state.FlastName,
        Femail : this.state.Femail ,
        Fedu : this.state.Fedu ,
        Fprofession : this.state.Fprofession ,
        Fdesignation : this.state.Fdesignation,
        FphoneNo : this.state.FphoneNo,
        MfirstName : this.state.MfirstName,
        MmiddleName : this.state.MmiddleName,
        MlastName : this.state.MlastName ,
        Memail : this.state.Memail,
        Medu : this.state.Medu,
        Mprofession : this.state.Mprofession,
        Mdesignation : this.state.Mdesignation,
        MphoneNo : this.state.MphoneNo,
        Relation1 : this.state.Relation1,
        RphoneNo1 : this.state.RphoneNo1,
        Relation2 : this.state.Relation2,
        RphoneNo2 : this.state.RphoneNo2,
        RefName : this.state.RefName,
        RefPhoneNo : this.state.RefPhoneNo,
        RefAddress : this.state.RefAddress,
        city:this.state.city,
        state: this.state.state,
        country : this.state.country,
        pincode : this.state.pincode,
        collegeName : this.state.collegeName,
        collegeAddress : this.state.collegeAddress , 
        collegeLogo : this.state.collegeLogo,
        Img : this.state.Img
        }
        if(this.state.id === 'add'){
            StudentService.createStudent(student).then(res =>{
                    this.props.history.push('/students')
                    })
            }
        else{
            StudentService.editStudent(this.state.id ,student).then(res =>{
                this.props.history.push('/students')
            })
        }
    }

  

    render() {
            
        // const {handleChange , handleSubmit } = this.state
        const {firstName , middleName , lastName , dob , birthPlace , language , FfirstName, FmiddleName , FlastName , Fdesignation , Fprofession , FphoneNo , Fedu , Femail , Mdesignation , MfirstName , MmiddleName , MlastName , Medu , Memail , Mprofession , MphoneNo , Relation1 , Relation2 , RphoneNo1 , RphoneNo2 , RefName , RefAddress , RefPhoneNo , countries , city , state , country , states , cities , pincode ,collegeName , collegeAddress , collegeLogo , Img , ageValidation , pincodeValidation , FemailValidation , MemailValidation ,FphoneValidation ,MphoneValidation , RphoneValidation , EphoneValidation} = this.state

           return (
            <div className="row d-flex justify-content-center mt-5" >
                <div className="col col-8 col-md-6" style={{backgroundColor:"lightsalmon"}}>
                    <h2 className="text-center text-white bg-dark">Student Admission form</h2><hr/>
                <form  onSubmit={this.handleSubmit}>
                
                <div className="form-group row">
                    <label htmlFor ="name" className="col-sm-3 col-form-label">Student Name: </label>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="first name" name="firstName" onChange={this.handleChange} value={firstName}/>
                    <small></small>
                    </div>
                    
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" name="SmiddleName" id="name" placeholder="middle name" name="middleName" onChange={this.handleChange} value={middleName} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="last name" name="lastName" onChange={this.handleChange}
                    value={lastName} />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <lable htmlFor="dob" className="col-sm-3 col-form-lable">DOB : </lable>
                    <div className="col-sm-3">
                    <input type="date" className="form-control" id="dob" name="dob"
                    onChange={this.handleChange} value={dob} />
                    { ageValidation ? null : <small className="text-danger">age is not valid</small>}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label htmlFor="bplace"className="col-sm-3 col-sm-lable" >Place of Birth :</label>
                    <div  className="col-sm-3">
                        <input type="text" className="form-control" id="bplace" placeholder="Enter place of birth" name="birthPlace" onChange={this.handleChange} value={birthPlace}></input>
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label htmlFor="lan"className="col-sm-3 col-sm-lable" >First language : </label>
                    <div  className="col-sm-3">
                        <input type="text" className="form-control" id="lan" placeholder="Enter First Language" name="language" onChange={this.handleChange} value={language}></input>
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label htmlFor="address" className="col-sm-3 col-sm-lable" >Address : </label>
                    <div  className="col-sm-4">
                        <select  className="form-select" name="city" value={city} onChange={this.handleChange}>
                        <option selected>select city</option>
                        {cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
                            
                        </select>
                    </div>
                    <div  className="col-sm-4">
                        <select  className="form-select" name="state" value={state} onChange={this.handleChange}>
                        <option selected>select state</option>
                        {states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
                        </select>
                    </div>
                    
                </div>

                <div className="form-group row my-3">
                    <label htmlFor="address" className="col-sm-3 col-sm-lable" > </label>
                    <div  className="col-sm-4">
                        <select  className="form-select" name="country" value={country} onChange={this.handleChange}>
                        <option selected>select country</option>
                        {countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
                        </select>
                    </div>
                   
                    <div  className="col-sm-4">
                        <input type="number" className="form-control" id="lan" placeholder="Enter pin code" name="pincode" value={pincode}
                        onChange={this.handleChange}></input>
                        {pincodeValidation ? null : <small className="text-danger">Pincode is not valid </small>}
                    </div>   
                </div>
                <hr className="my-4"></hr>
                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable">College Details : </lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="College Name" name="collegeName" onChange={this.handleChange} value={ collegeName} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="College Address" name="collegeAddress" onChange={this.handleChange} value={ collegeAddress} />
                   
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"></lable>
                    <div className="col-sm-4">
                    <input type="file" className="form-control" id="email" placeholder="Student Image" name="Img" onChange={this.handleChange} />
                    {Img && <img src={Img} width="50px" height="50px" className="m-3"></img> }
                    </div>
                    <div className="col-sm-4">
                    <input type="file" className="form-control" id="email" placeholder="College Image" name="collegeLogo" onChange={this.handleChange} />
                    {collegeLogo && <img src={collegeLogo} width="50px" height="50px" className="m-3"></img> }
                    </div>
                </div>


                <hr className="my-4"></hr>
                <div className="form-group row my-3">
                    <label htmlFor ="name" className="col-sm-3 col-form-label">Father's Details: </label>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="first name" name="FfirstName" value={ FfirstName} onChange={this.handleChange} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="middle name" name="FmiddleName" value={ FmiddleName} onChange={this.handleChange} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="last name" name="FlastName" value={ FlastName}  onChange={this.handleChange} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"></lable>
                    <div className="col-sm-6">
                    <input type="email" className="form-control" id="email" placeholder="Email" name="Femail" onChange={this.handleChange} value={ Femail} />
                    {FemailValidation ? null : <small className="text-danger"> Email is not valid</small>}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-6">
                    <input type="text" className="form-control" id="email" placeholder="Education Qualification" name="Fedu" onChange={this.handleChange} value={ Fedu} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Profession" name="Fprofession" onChange={this.handleChange} value={ Fprofession} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Designation" name="Fdesignation" onChange={this.handleChange} value={ Fdesignation} />
                    </div>
                    
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Phone Number" name="FphoneNo" onChange={this.handleChange} value={ FphoneNo} />
                    {FphoneValidation ? null : <small className="text-danger">phone no not valid</small>}
                    </div>
                    {/* <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Telephone Number" />
                    </div> */}
                    
                </div>
                <hr className="my-4"></hr>
                <div className="form-group row my-3">
                    <label htmlFor ="name" class="col-sm-3 col-form-label">Mother's Details: </label>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="first name" name="MfirstName" onChange={this.handleChange} value={ MfirstName} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="middle name" name="MmiddleName" onChange={this.handleChange} value={ MmiddleName} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="last name" name="MlastName" onChange={this.handleChange} value={ MlastName} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"></lable>
                    <div className="col-sm-6">
                    <input type="email" className="form-control" id="email" placeholder="Email" name="Memail" onChange={this.handleChange} value={ Memail} />
                    {MemailValidation ? null : <small className="text-danger">Email is not valid</small>}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-6">
                    <input type="text" className="form-control" id="email" placeholder="Education Qualification" name="Medu" onChange={this.handleChange} value={ Medu} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Profession" name="Mprofession" onChange={this.handleChange} value={ Mprofession} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Designation" name="Mdesignation" onChange={this.handleChange} value={ Mdesignation} />
                    </div>
                    
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-4">
                    <input type="number" className="form-control" id="email" placeholder="Phone Number" name="MphoneNo" onChange={this.handleChange} value={ MphoneNo} />
                    {MphoneValidation ? null : <small className="text-danger">Phone No not valid</small>}
                    </div>
                    {/* <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Telephone Number" />
                    </div> */}
                    
                </div>
                    <hr className="my-5"></hr>
                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable">Emergency Contact List</lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Relation" name="Relation1" onChange={this.handleChange} value={ Relation1} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Phone Number" name="RphoneNo1" onChange={this.handleChange} value={ RphoneNo1} />
                    {EphoneValidation ? null : <small className="text-danger">Phone No not valid</small>}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"></lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Relation" name="Relation2" onChange={this.handleChange} value={ Relation2} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Phone Number" name="RphonNo2" onChange={this.handleChange} value={ RphoneNo2} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable">Reference Details:</lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Name" name="RefName" onChange={this.handleChange} value={ RefName} />
                    </div>
                    <div className="col-sm-4">
                    <input type="number" className="form-control" id="email" placeholder="Phone Number" name="RefPhoneNo" onChange={this.handleChange} value={ RefPhoneNo} />
                    {RphoneValidation ? null : <small className="text-danger">phone No not valid</small>}
                    </div>
                    
                </div>
                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"></lable>
                    
                    <div className="col-sm-8">
                    <textarea type="text" className="form-control" id="email" placeholder="Address" name="RefAddress" onChange={this.handleChange} value={ RefAddress} />
                    </div>
                    
                </div>

                {/* disabled={this.state.isValid} */}
                <div className="row m-5">
                <button type="submit" className="btn btn-primary btn-block">submit</button>
                </div>


                </form>
                </div>
            </div>
        )
    }
}
