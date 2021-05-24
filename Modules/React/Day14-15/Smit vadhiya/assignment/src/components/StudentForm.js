import React, { Component , useState} from 'react'
import DisplayDetails from './DisplayDetails'
import {Option, District} from './Option'


export const StdentForm = () => {
    var [data,setChange] =  useState({
        stdList :[],
        firstName : "",
        lastName : "",
        email : "",
        state : "",
        district : "",
        stdImg : "",
        clgImg : "",
        clgName : "",
        stdAddress : "",
        gender :"",
        dob : "",
        stdImgFile: ""
    })

    const handleChange = (e) => {
        const {name , value} = e.target
        setChange({...data,[name] : value} )
    }
    const handleImg= (e) => {
        setChange({...data,[e.target.name] : "/img/"+ e.target.files[0].name} )

    }

    const handleSubmit = (e) =>{
            e.preventDefault()
            const newData = {}
            for(var i in data){
                if(i !== "stdList"){
                    newData[i] = data[i]
                }
            }
            setChange({
                stdList:[...data.stdList,newData],
                firstName : "",
                lastName : "",
                email : "",
                state : "",
                district : "",
                stdImg : "",
                clgImg : "", 
                clgName : "",
                stdAddress : "",
                gender :"",
                dob : "",
                stdImgFile: ""
            })
            console.log((data
                
                ));
            
    }

    return (
        <div className="card">
                <form action="" onSubmit={handleSubmit} >
                    <div className="card-header h1 text-center text-white bg-dark text-capitalize p-3">
                        registration form
                    </div>
                    <div className="card-body  body-font ">
                        <div className="row gy-3">

                            {/* FIRST NAME */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="fname" className="col-4">Firstname</label>
                                        <div className="col-8">
                                            <input 
                                                type="text" 
                                                id="fname" 
                                                className="form-control" 
                                                name="firstName" 
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                value={data.firstName}
                                            />
                                        </div
                                        >
                                </div>
                            </div>

                            {/* LAST NAME */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="lname" className="col-4">Lastname</label>
                                        <div className="col-8">
                                            <input 
                                                type="text" id="lname" 
                                                  
                                                className="form-control" 
                                                name="lastName" 
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                value={data.lastName}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* EMAIL NAME */}
                            <div className="col-12 from-group ">
                                <div className="row">
                                        <label htmlFor="email" className="col-4 col-lg-2">Email</label>
                                        <div className="col-8 col-lg-10">
                                            <input 
                                                type="email" 
                                                id="email" 
                                                className="form-control" 
                                                name="email" 
                                                onChange={handleChange}
                                                placeholder="Email"
                                                value={data.email}
                                            />
                                        </div>
                                </div>
                            </div>


                            {/* GENDER */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                    <label htmlFor="lname" className="col-4">Gender</label>
                                    <div className="col-8">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" required name="gender" value="male"  id="male"  onChange={handleChange}/>
                                            <label className="form-check-label" htmlFor="male">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" required name="gender" value="female"  id="female" onChange={handleChange}/>
                                            <label className="form-check-label" htmlFor="female">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DOB */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="dob" className="col-4">Birthdate</label>
                                        <div className="col-8">
                                            <input 
                                                type="date" id="dob" 
                                                  
                                                className="form-control" 
                                                name="dob" 
                                                onChange={handleChange}
                                                value={data.dob}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* ADDRESS */}
                            <div className="col-12 from-group ">
                                <div className="row">
                                        <label htmlFor="stdAddress" className="col-4 col-lg-2">Address</label>
                                        <div className="col-8 col-lg-10">
                                            <textarea 
                                                id="stdAddress" 
                                                className="form-control" 
                                                name="stdAddress" 
                                                onChange={handleChange}
                                                placeholder="Student Address"
                                                value={data.stdAddress}
                                                rows="3"
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* STATE */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                    <label htmlFor="state" className="col-4">State</label>
                                    <div className="col-8">
                                        <select  
                                            id="state" 
                                            className="form-control" 
                                            name="state" 
                                            onChange={handleChange}
                                            value={data.state}
                                        >
                                            <option value="" disabled>--select--</option>
                                            <Option />
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* DISTRICT */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                    <label htmlFor="lname" className="col-4">District</label>
                                    <div className="col-8">
                                        <select  
                                            id="district" 
                                            className="form-control" 
                                              
                                            name="district" 
                                            onChange={handleChange}
                                            value={data.district}
                                        >
                                            <option value="" disabled>--select--</option>
                                            <District state={data.state}/>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* COLLAGE NAME */}
                            <div className="col-12 from-group ">
                                <div className="row">
                                        <label htmlFor="clgName" className="col-4 col-lg-2">Collage</label>
                                        <div className="col-8 col-lg-10">
                                            <input 
                                                type="text" 
                                                id="clgName" 
                                                className="form-control" 
                                                name="clgName" 
                                                onChange={handleChange}
                                                placeholder="Collage Name"    
                                                value={data.clgName}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* UPLOAD STUDENT IMG IMAGE */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="stdImg" className="col-6">Student Image</label>
                                        <div className="col-6">
                                            <input 
                                                type="file" 
                                                id="stdImg" 
                                                className="form-control" 
                                                name="stdImg" 
                                                onChange={handleImg}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* UPLOAD STUDENT IMG IMAGE */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="clgImg" className="col-6">Collage Logo</label>
                                        <div className="col-6 ">
                                            <input  
                                                type="file" 
                                                id="clgImg" 
                                                className="form-control" 
                                                name="clgImg" 
                                                onChange={handleImg}
                                            />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer bg-dark text-center p-3"  >
                        <button className="btn btn-light w-25">
                            Sign Up
                        </button>
                    </div>

                </form>
                <div className="row">

                    {(data.stdList.length > 0 ) ? data.stdList.map((data) => <DisplayDetails key={data.firstName} detail={data}/>) : null}
                </div>
                <img src={data.stdImgFile} alt="" />
            </div>
    
    )
}





export default class StudentForm extends Component {
    state = {
        stdList :[],
        firstName : "",
        lastName : "",
        email : "",
        state : "",
        district : "",
        stdImg : "",
        clgImg : "",
        clgName : "",
        stdAddress : "",
        gender :"",
        dob : "",
        stdImgFile: ""
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleImg= (e) => {
        this.setState({
            [e.target.name] : e.target.files[0],
            stdImgFile : URL.createObjectURL(e.target.files[0])
        })
        
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const newData = {}
        for(var i in this.state){
            if(i !== "stdList"){
                newData[i] = this.state[i]
                this.setState({
                    [i] : ""
                }) 
            } else {
                this.setState({
                    stdList : [...this.state.stdList,newData],
                }) 
            }
        }
        
    }
    render() {
        console.log(this.state.stdList.length);
        return (
            <div className="card">
                <form action="" onSubmit={this.handleSubmit} >
                    <div className="card-header h1 text-center text-white bg-dark text-capitalize p-3">
                        registration form
                    </div>
                    <div className="card-body  body-font ">
                        <div className="row gy-3">

                            {/* FIRST NAME */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="fname" className="col-4">Firstname</label>
                                        <div className="col-8">
                                            <input 
                                                type="text" 
                                                id="fname" 
                                                className="form-control" 
                                                name="firstName" 
                                                onChange={this.handleChange}
                                                placeholder="First Name"
                                                value={this.state.firstName}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* LAST NAME */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="lname" className="col-4">Lastname</label>
                                        <div className="col-8">
                                            <input 
                                                type="text" id="lname" 
                                                  
                                                className="form-control" 
                                                name="lastName" 
                                                onChange={this.handleChange}
                                                placeholder="Last Name"
                                                value={this.state.lastName}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* EMAIL NAME */}
                            <div className="col-12 from-group ">
                                <div className="row">
                                        <label htmlFor="email" className="col-4 col-lg-2">Email</label>
                                        <div className="col-8 col-lg-10">
                                            <input 
                                                type="email" 
                                                id="email" 
                                                className="form-control" 
                                                name="email" 
                                                onChange={this.handleChange}
                                                placeholder="Email"
                                                value={this.state.email}
                                            />
                                        </div>
                                </div>
                            </div>


                            {/* GENDER */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                    <label htmlFor="lname" className="col-4">Gender</label>
                                    <div className="col-8">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" required name="gender" value="male"  id="male"  onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="male">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" required name="gender" value="female"  id="female" onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="female">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DOB */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="dob" className="col-4">Birthdate</label>
                                        <div className="col-8">
                                            <input 
                                                type="date" id="dob" 
                                                  
                                                className="form-control" 
                                                name="dob" 
                                                onChange={this.handleChange}
                                                value={this.state.dob}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* ADDRESS */}
                            <div className="col-12 from-group ">
                                <div className="row">
                                        <label htmlFor="stdAddress" className="col-4 col-lg-2">Address</label>
                                        <div className="col-8 col-lg-10">
                                            <textarea 
                                                id="stdAddress" 
                                                className="form-control" 
                                                name="stdAddress" 
                                                onChange={this.handleChange}
                                                placeholder="Student Address"
                                                value={this.state.stdAddress}
                                                rows="3"
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* STATE */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                    <label htmlFor="state" className="col-4">State</label>
                                    <div className="col-8">
                                        <select  
                                            id="state" 
                                            className="form-control" 
                                            name="state" 
                                            onChange={this.handleChange}
                                            value={this.state.state}
                                        >
                                            <option value="" disabled>--select--</option>
                                            <Option />
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* DISTRICT */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                    <label htmlFor="lname" className="col-4">District</label>
                                    <div className="col-8">
                                        <select  
                                            id="district" 
                                            className="form-control" 
                                              
                                            name="district" 
                                            onChange={this.handleChange}
                                            value={this.state.district}
                                        >
                                            <option value="" disabled>--select--</option>
                                            <District state={this.state.state}/>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* COLLAGE NAME */}
                            <div className="col-12 from-group ">
                                <div className="row">
                                        <label htmlFor="clgName" className="col-4 col-lg-2">Collage</label>
                                        <div className="col-8 col-lg-10">
                                            <input 
                                                type="text" 
                                                id="clgName" 
                                                className="form-control" 
                                                name="clgName" 
                                                onChange={this.handleChange}
                                                placeholder="Collage Name"    
                                                value={this.state.clgName}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* UPLOAD STUDENT IMG IMAGE */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="stdImg" className="col-6">Student Image</label>
                                        <div className="col-6">
                                            <input 
                                                type="file" 
                                                id="stdImg" 
                                                className="form-control" 
                                                name="stdImg" 
                                                onChange={this.handleImg}
                                                value={[this.state.stdImgFile]}
                                            />
                                        </div>
                                </div>
                            </div>

                            {/* UPLOAD STUDENT IMG IMAGE */}
                            <div className="col-12 col-lg-6 from-group ">
                                <div className="row">
                                        <label htmlFor="clgImg" className="col-6">Collage Logo</label>
                                        <div className="col-6 ">
                                            <input  
                                                type="file" 
                                                id="clgImg" 
                                                className="form-control" 
                                                name="clgImg" 
                                                onChange={this.handleImg}
                                            />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer bg-dark text-center p-3"  >
                        <button className="btn btn-light w-25">
                            Sign Up
                        </button>
                    </div>

                </form>
                <div className="row">

                    {(this.state.stdList.length > 0 ) ? this.state.stdList.map((data) => <DisplayDetails key={data.firstName} detail={data}/>) : null}
                </div>
                <img src={this.state.stdImgFile} alt="" />
            </div>
        )
    }
}
