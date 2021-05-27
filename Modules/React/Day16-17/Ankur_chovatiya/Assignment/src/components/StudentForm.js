import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid'
import StudentService from '../services/StudentService'

function StudentForm(props) {
    const [id , setId] = useState(props.match.params.id)
    const [stuDetails , setStuDetails] = useState({
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
        ageValidation : true ,
        pincodeValidation : true ,
        FemailValidation : true ,
        MemailValidation : true ,
        FphoneValidation : true ,
        MphoneValidation : true ,
        EphoneValidation : true ,
        RphoneValidation : true ,
        isValid : false
    })
    const [cities , setCities] = useState([])
    const [countries , setCountries] = useState([])
    const [states , setStats] = useState([])

    useEffect(()=>{
        StudentService.getStudentById(id).then((res)=>{
            let student = res.data;
            setStuDetails({
                firstName : student.firstName,
                middleName : student.middleName,
        lastName : student.lastName,
        dob : student.dob,
        birthPlace :student.birthPlace,
        language : student.language,
        FfirstName : student.FfirstName,
        FmiddleName : student.FmiddleName,
        FlastName : student.FlastName,
        Femail : student.Femail,
        Fedu : student.Fedu ,
        Fprofession : student.Fprofession ,
        Fdesignation : student.Fdesignation,
        FphoneNo : student.FphoneNo,
        MfirstName : student.MfirstName,
        MmiddleName : student.MmiddleName,
        MlastName : student.MlastName,
        Memail : student.Memail,
        Medu : student.Medu,
        Mprofession : student.Mprofession,
        Mdesignation : student.Mdesignation,
        MphoneNo : student.MphoneNo,
        Relation1 : student.Relation1,
        RphoneNo1 : student.RphoneNo1,
        Relation2 : student.Relation2,
        RphoneNo2 : student.RphoneNo2,
        RefName : student.RefName,
        RefPhoneNo : student.RefPhoneNo,
        RefAddress : student.RefAddress,
        city:student.city,
        state: student.state,
        country : student.country,
        pincode : student.pincode,
        collegeName : student.collegeName,
        collegeAddress : student.collegeAddress,
        collegeLogo: null,
        Img : null,
    
            } )
        })
        setCountries( [
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
        ])
    } , [])


    const handleChange = (e) =>{
        console.log('changed');
        let field = e.target.name
        let value = e.target.value

        if(e.target.name=='Img' || e.target.name=='collegeLogo'){
            console.log(e.target.files[0].name);
            if(e.target.files[0] === undefined){
              setStuDetails({...stuDetails ,
                [e.target.name]:null
                })
            }
            else{
              setStuDetails({...stuDetails ,
              [e.target.name]:`http://localhost:3000/img/${e.target.files[0].name}`
              },()=>console.log( state.Img))
            }
          }
          else {
            setStuDetails({ ...stuDetails ,[e.target.name] : e.target.value  })
          }

          // validations
          if(e.target.name=="dob"){
            const d =e.target.value.split('-');
            const selecteddate = parseInt(d[0]);
            const currentdate = parseInt(new Date().getFullYear())
            if((currentdate-selecteddate)<5 || (currentdate-selecteddate)>20){
              setStuDetails({...stuDetails ,
                ageValidation:false
              })
            }
            else{
              setStuDetails({...stuDetails ,
                ageValidation:true
              })
            }
          }
        
          // pincode validation
          if(e.target.name=="pincode"){
            if(e.target.value.match(/^\d{6}$/)){
              setStuDetails({...stuDetails ,
                pincodeValidation:true
              })
            }
            else{
              setStuDetails({...stuDetails ,
                pincodeValidation:false
              })
            }
          }

          // father's email validation
          if(e.target.name=="Femail"){
            if(e.target.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g)){
              setStuDetails({...stuDetails ,
                FemailValidation:true
              })
            }
            else{
              setStuDetails({...stuDetails ,
                FemailValidation:false
              })
            }
          }
          // mother's email validation  
      
          if(e.target.name=="Memail"){
            if(e.target.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g)){
              setStuDetails({...stuDetails ,
                MemailValidation:true
              })
            }
            else{
              setStuDetails({...stuDetails ,
                MemailValidation:false
              })
            }
          }
          // phone number validation
          if(e.target.name=="FphoneNo"){
            if(e.target.value.match(/^\d{10}$/)){
              setStuDetails({...stuDetails ,
                FphoneValidation:true
              })
            }
            else{
              setStuDetails({...stuDetails ,
                FphoneValidation:false
              })
            }
          }
      
          if(e.target.name=="MphoneNo"){
            if(e.target.value.match(/^\d{10}$/)){
              setStuDetails({...stuDetails ,
                MphoneValidation:true
              })
            }
            else{
              setStuDetails({...stuDetails ,
                MphoneValidation:false
              })
            }
          }
      
          if(e.target.name=="RphoneNo1"){
            if(e.target.value.match(/^\d{10}$/)){
              setStuDetails({...stuDetails ,
                EphoneValidation:true
              })
            }
            else{
              setStuDetails({...stuDetails ,
                EphoneValidation:false
              })
            }
          }
      
          if(e.target.name=="RefPhoneNo"){
            if(e.target.value.match(/^\d{10}$/)){
              setStuDetails({...stuDetails , 
                RphoneValidation:true
              })
            }
            else{
              setStuDetails({...stuDetails ,
                RphoneValidation:false
              })
            }
          }
        
          if(stuDetails.ageValidation &&  stuDetails.FemailValidation &&  stuDetails.MemailValidation &&  stuDetails.FphoneValidation &&  stuDetails.MphoneValidation &&  stuDetails.EphoneValidation &&  stuDetails.RphoneValidation &&  stuDetails.pincodeValidation ){
            this.setState({
                isValid : true
            })
          }


          // dropdown logic
        //   console.log(countries);
          if(field == 'country'){
            setStuDetails({...stuDetails ,
                [e.target.name] : e.target.value  
                })
            setStats(
                 countries.find(cntry => cntry.name === e.target.value).states);
        }
        if(field == 'state'){
            const stats = countries.find(cntry => cntry.name === stuDetails.country).states;
            setStuDetails({ ...stuDetails ,
                [e.target.name] : e.target.value  
                })
		    setCities(
                stats.find(stat => stat.name === e.target.value).cities);
        }
    }
    
    const handleSubmit = (e) =>{
        console.log(id);
        console.log(stuDetails);
        e.preventDefault();
        const student = {
            studentId : uuid(),
            firstName : stuDetails.firstName,
            middleName : stuDetails.middleName,
            lastName : stuDetails.lastName , 
            dob :  stuDetails.dob,
            birthPlace :  stuDetails.birthPlace,
        language :  stuDetails.language,
        FfirstName :  stuDetails.FfirstName,
        FmiddleName :  stuDetails.FmiddleName,
        FlastName :  stuDetails.FlastName,
        Femail :  stuDetails.Femail ,
        Fedu :  stuDetails.Fedu ,
        Fprofession :  stuDetails.Fprofession ,
        Fdesignation :  stuDetails.Fdesignation,
        FphoneNo :  stuDetails.FphoneNo,
        MfirstName :  stuDetails.MfirstName,
        MmiddleName :  stuDetails.MmiddleName,
        MlastName :  stuDetails.MlastName ,
        Memail :  stuDetails.Memail,
        Medu :  stuDetails.Medu,
        Mprofession :  stuDetails.Mprofession,
        Mdesignation :  stuDetails.Mdesignation,
        MphoneNo :  stuDetails.MphoneNo,
        Relation1 :  stuDetails.Relation1,
        RphoneNo1 :  stuDetails.RphoneNo1,
        Relation2 :  stuDetails.Relation2,
        RphoneNo2 :  stuDetails.RphoneNo2,
        RefName :  stuDetails.RefName,
        RefPhoneNo :  stuDetails.RefPhoneNo,
        RefAddress :  stuDetails.RefAddress,
        city: stuDetails.city,
        state:  stuDetails.state,
        country :  stuDetails.country,
        pincode :  stuDetails.pincode,
        collegeName :  stuDetails.collegeName,
        collegeAddress :  stuDetails.collegeAddress , 
        collegeLogo :  stuDetails.collegeLogo,
        Img :  stuDetails.Img
        }
        if(id === 'add'){
            StudentService.createStudent(student).then(res =>{
                     props.history.push('/students')
                    })
            }
        else{
            StudentService.editStudent(id ,student).then(res =>{
                 props.history.push('/students')
            })
        }
    }
    const {firstName , middleName , lastName , dob , birthPlace , language , FfirstName, FmiddleName , FlastName , Fdesignation , Fprofession , FphoneNo , Fedu , Femail , Mdesignation , MfirstName , MmiddleName , MlastName , Medu , Memail , Mprofession , MphoneNo , Relation1 , Relation2 , RphoneNo1 , RphoneNo2 , RefName , RefAddress , RefPhoneNo  , city , state , country   , pincode ,collegeName , collegeAddress , collegeLogo , Img , ageValidation , pincodeValidation , FemailValidation , MemailValidation ,FphoneValidation ,MphoneValidation , RphoneValidation , EphoneValidation} = stuDetails

    return (
       
        <div>
             <div className="row d-flex justify-content-center mt-5" >
                <div className="col col-8 col-md-6" style={{backgroundColor:"lightsalmon"}}>
                    <h2 className="text-center text-white bg-dark">Student Admission form</h2><hr/>
                <form onSubmit={handleSubmit}>
                
                <div className="form-group row">
                    <label htmlFor ="name" className="col-sm-3 col-form-label">Student Name: </label>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="first name" name="firstName" onChange={handleChange} value={firstName}/>
                    <small></small>
                    </div>
                    
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" name="middleName" id="name" placeholder="middle name" name="middleName" value={middleName} onChange={handleChange}/>
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="last name" name="lastName" onChange={handleChange} value={lastName}
                    />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <lable htmlFor="dob" className="col-sm-3 col-form-lable">DOB : </lable>
                    <div className="col-sm-3">
                    <input type="date" className="form-control" id="dob" name="dob"
                    onChange={ handleChange} value={dob} />
                    { ageValidation ? null : <small className="text-danger">age is not valid</small>}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label htmlFor="bplace"className="col-sm-3 col-sm-lable" >Place of Birth :</label>
                    <div  className="col-sm-3">
                        <input type="text" className="form-control" id="bplace" placeholder="Enter place of birth" name="birthPlace" onChange={ handleChange} value={birthPlace}></input>
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label htmlFor="lan"className="col-sm-3 col-sm-lable" >First language : </label>
                    <div  className="col-sm-3">
                        <input type="text" className="form-control" id="lan" placeholder="Enter First Language" name="language" onChange={ handleChange} value={language}></input>
                    </div>
                </div>

                <div className="form-group row my-3">
                    <label htmlFor="address" className="col-sm-3 col-sm-lable" >Address : </label>
                    <div  className="col-sm-4">
                        <select  className="form-select" name="city" value={city} onChange={ handleChange}>
                        <option selected>select city</option>
                        {cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
                            
                        </select>
                    </div>
                    <div  className="col-sm-4">
                        <select  className="form-select" name="state" value={state} onChange={ handleChange}>
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
                        <select  className="form-select" name="country" value={country} onChange={ handleChange}>
                        <option selected>select country</option>
                        {countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
                        </select>
                    </div>
                   
                    <div  className="col-sm-4">
                        <input type="number" className="form-control" id="lan" placeholder="Enter pin code" name="pincode" value={pincode}
                        onChange={ handleChange}></input>
                        {pincodeValidation ? null : <small className="text-danger">Pincode is not valid </small>}
                    </div>   
                </div>
                <hr className="my-4"></hr>
                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable">College Details : </lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="College Name" name="collegeName" onChange={ handleChange} value={ collegeName} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="College Address" name="collegeAddress" onChange={ handleChange} value={ collegeAddress} />
                   
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"></lable>
                    <div className="col-sm-4">
                    <input type="file" className="form-control" id="email" placeholder="Student Image" name="Img" onChange={ handleChange} />
                    {Img && <img src={Img} width="50px" height="50px" className="m-3"></img> }
                    </div>
                    <div className="col-sm-4">
                    <input type="file" className="form-control" id="email" placeholder="College Image" name="collegeLogo" onChange={ handleChange} />
                    {collegeLogo && <img src={collegeLogo} width="50px" height="50px" className="m-3"></img> }
                    </div>
                </div>


                <hr className="my-4"></hr>
                <div className="form-group row my-3">
                    <label htmlFor ="name" className="col-sm-3 col-form-label">Father's Details: </label>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="first name" name="FfirstName" value={ FfirstName} onChange={ handleChange} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="middle name" name="FmiddleName" value={ FmiddleName} onChange={ handleChange} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="last name" name="FlastName" value={ FlastName}  onChange={ handleChange} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"></lable>
                    <div className="col-sm-6">
                    <input type="email" className="form-control" id="email" placeholder="Email" name="Femail" onChange={ handleChange} value={ Femail} />
                    {FemailValidation ? null : <small className="text-danger"> Email is not valid</small>}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-6">
                    <input type="text" className="form-control" id="email" placeholder="Education Qualification" name="Fedu" onChange={ handleChange} value={ Fedu} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Profession" name="Fprofession" onChange={ handleChange} value={ Fprofession} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Designation" name="Fdesignation" onChange={ handleChange} value={ Fdesignation} />
                    </div>
                    
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Phone Number" name="FphoneNo" onChange={ handleChange} value={ FphoneNo} />
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
                    <input type="text"  className="form-control" id="name" placeholder="first name" name="MfirstName" onChange={ handleChange} value={ MfirstName} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="middle name" name="MmiddleName" onChange={ handleChange} value={ MmiddleName} />
                    </div>
                    <div className="col-sm-3">
                    <input type="text"  className="form-control" id="name" placeholder="last name" name="MlastName" onChange={ handleChange} value={ MlastName} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"></lable>
                    <div className="col-sm-6">
                    <input type="email" className="form-control" id="email" placeholder="Email" name="Memail" onChange={ handleChange} value={ Memail} />
                    {MemailValidation ? null : <small className="text-danger">Email is not valid</small>}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-6">
                    <input type="text" className="form-control" id="email" placeholder="Education Qualification" name="Medu" onChange={ handleChange} value={ Medu} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable htmlFor="email" className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Profession" name="Mprofession" onChange={ handleChange} value={ Mprofession} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Designation" name="Mdesignation" onChange={ handleChange} value={ Mdesignation} />
                    </div>
                    
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"> </lable>
                    <div className="col-sm-4">
                    <input type="number" className="form-control" id="email" placeholder="Phone Number" name="MphoneNo" onChange={ handleChange} value={ MphoneNo} />
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
                    <input type="text" className="form-control" id="email" placeholder="Relation" name="Relation1" onChange={ handleChange} value={ Relation1} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Phone Number" name="RphoneNo1" onChange={ handleChange} value={ RphoneNo1} />
                    {EphoneValidation ? null : <small className="text-danger">Phone No not valid</small>}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"></lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Relation" name="Relation2" onChange={ handleChange} value={ Relation2} />
                    </div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Phone Number" name="RphonNo2" onChange={ handleChange} value={ RphoneNo2} />
                    </div>
                </div>

                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable">Reference Details:</lable>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" id="email" placeholder="Name" name="RefName" onChange={ handleChange} value={ RefName} />
                    </div>
                    <div className="col-sm-4">
                    <input type="number" className="form-control" id="email" placeholder="Phone Number" name="RefPhoneNo" onChange={ handleChange} value={ RefPhoneNo} />
                    {RphoneValidation ? null : <small className="text-danger">phone No not valid</small>}
                    </div>
                    
                </div>
                <div className="form-group row my-3">
                    <lable className="col-sm-3 col-form-lable"></lable>
                    
                    <div className="col-sm-8">
                    <textarea type="text" className="form-control" id="email" placeholder="Address" name="RefAddress" onChange={ handleChange} value={ RefAddress} />
                    </div>
                    
                </div>

                {/* disabled={ state.isValid} */}
                <div className="row m-5">
                <button type="submit" className="btn btn-primary btn-block">submit</button>
                </div>


            </form>
        </div>
        </div>
        </div>
    )
}

export default StudentForm
