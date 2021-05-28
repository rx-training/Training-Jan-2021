import React, { Component } from "react";

// 2. Create Login Component which validate a user with below credential username=admin, password=admin
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: "",
        };
    }
    handleChange1 = (e) => {
        const username = e.target.value;
        this.setState({
            username: username,
        });
    };
    handleChange2 = (e) => {
        const password = e.target.value;
        this.setState({
            password: password,
        });
    };
    handleSubmit = (e) => {
        const username = this.state.username;
        const password = this.state.password;

        if (username === "admin" && password === "admin") {
            this.setState({
                message: "Admin Login Successfully Done",
            });
        } else {
            this.setState({ message: "Incorrect Username and Password" });
        }
    };

    render() {
        return (
            <div className="card bg-dark text-white">
                <h3 className="text-center p-1">Login Form</h3>
                <div className="form-group ">
                    <label className="h5 p-1">Username : </label>
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Username"
                        onChange={this.handleChange1}
                        aria-describedby="helpId"
                    />
                </div>
                <div className="form-group">
                    <label className="h5 p-1">Password : </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={this.handleChange2}
                        aria-describedby="helpId"
                    />
                </div>
                <button
                    className="mt-3 btn btn-outline-primary"
                    onClick={this.handleSubmit}
                >
                    Login
                </button>
                <p className="h3 text-success m-2">{this.state.message}</p>
            </div>
        );
    }
}
