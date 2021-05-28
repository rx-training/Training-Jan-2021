import React, { Component } from 'react'

export default class StudentForm extends Component {
    render() {
        const {id , firstName , lastName , img , collegeName , logo, handleSubmit , handleChange} = this.props;

        return (
            <section className="container">
                <h1 className="text-center">Student Form</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-8 col-md-6 ">
                <form onSubmit={handleSubmit}>

                    <div className="form-group my-3">
                    <label for="id">Student ID</label>
                    <input type="text" className="form-control" value={id} id="id" name="id"  onChange={handleChange}></input>
                    </div>
                    <div className="form-group my-3">
                    <label for="firstname">First Name</label>
                    <input type="text" className="form-control" value={firstName} id="firstname" name="firstName" onChange={handleChange}></input>
                    </div>
                    <div className="form-group my-3">
                    <label for="lastname">last Name</label>
                    <input type="text" className="form-control" value={lastName} id="lastname" name="lastName" onChange={handleChange}></input>
                    </div>
                    <div className="form-group my-3">
                    <label for="img">Image</label>
                    <input type="file" className="form-control" value={img} name="img" onChange={handleChange} id="img"></input>
                    </div>

                    <div className="form-group my-3">
                    <label for="clgName">College Name</label>
                    <input type="text" className="form-control" value={collegeName} id="clgName" name="collegeName" onChange={handleChange}></input>
                    </div>

                    <div className="form-group my-3">
                    <label for="clgImg">College Logo</label>
                    <input type="file" value={logo} name="logo" onChange={handleChange} className="form-control" id="clgImg"></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block mt-3">Submit</button>
                </form>
                </div>
                </div>
            </section>
        )
    }
}

