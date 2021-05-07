import React, { Component } from 'react'



export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {username : '', password : '',success : false}
    }
    login = (e) =>{
        const uname = this.state.username
        const pass = this.state.password
        if(!(uname.length == 0 || pass.length == 0 )){
            e.preventDefault();
            if(uname == 'admin'){
                if(pass == 'admin'){
                    this.setState({success : true})
                } else {
                    alert("Wrong Password")
                }
            } else {
                alert("Wrong Username")
            }
        }
    }
    render() {
        return (
        <div>
            {this.state.success ?
            <div className="bg-success row text-white text-center  rounded p-2">
                <h3>Login Succesful</h3>
            </div>
            :
            <div className ="row  m-2 border border-primary rounded">
                <h2 className="bg-primary p-2 text-center text-white display-4"> Login </h2>
                <form className="p-2">
                    <div className="form-group ">
                        <label  htmlFor="length">Enter Username </label>
                        <input type="text" className="form-control" onChange={(e) => this.state.username = e.target.value} placeholder="Username" required="required"/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="width">Enter Password </label>
                        <input type="text" className="form-control" onChange={(e) => this.state.password = e.target.value} placeholder="Password" required="required"/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login" onClick={this.login}/>
                </form>
            </div>}
        </div>
        )
    }
}
