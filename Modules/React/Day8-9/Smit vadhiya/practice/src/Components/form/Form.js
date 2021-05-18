import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        firstName : "",
        lastName : "",
        people : []
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        const fname = this.state.firstName
        const lname = this.state.lastName
        const fullname = `${fname} ${lname}`
        if(fname.length >0 && lname.length>0){
            this.setState({
                people : [...this.state.people,fullname],
                firstName : "",
                lastName : ""
            })
        }
    }

    handleUncontrolSubmit =(e) =>{
        e.preventDefault()
        console.log(this.refs.firstName.value,this.email.value);
    }

    render() {
        return (
            <div>
                <div className="p-3"> 
                    <h1>Controled input</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            className="form-control m-2"
                            name="firstName"
                            value={this.state.firstName} 
                            onChange={this.handleChange}
                            placeholder="First Name"
                        />
                        <input 
                            type="text" 
                            className="form-control m-2"
                            name="lastName"
                            value={this.state.lastName} 
                            onChange={this.handleChange}
                            placeholder="Last Name"
                        />
                        <input type="submit" className="btn btn-primary m-2" />
                    </form>
                </div>

                <div className="p-4 display-5">
                    {"People : "+ this.state.people}
                </div>

                <div className="p-3"> 
                    <h1>Uncontroled input</h1>
                    <form onSubmit={this.handleUncontrolSubmit}>
                        <input 
                            type="text" 
                            className="form-control m-2"
                            placeholder="First Name"
                            ref="firstName"
                        />
                        <input 
                            type="email" 
                            className="form-control m-2"
                            placeholder="Email"
                            ref={mail=> this.email = mail}
                        />
                        <input type="submit" className="btn btn-primary m-2" />
                    </form>
                </div>

                <div className="p-4 display-5">
                    
                </div>
            </div>
        )
    }
}
