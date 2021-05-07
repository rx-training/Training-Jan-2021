import React, { Component } from "react";

// 5. Create a signup component which contains field like Name, Address,
// PanNumber and interpolate these information in the paragraph
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Address: "",
            Phnno: "",
            showInfo: false,
        };
    }
    handleChange1 = (e) => {
        const Name = e.target.value;
        this.setState({
            Name: Name,
        });
    };
    handleChange2 = (e) => {
        const Address = e.target.value;
        this.setState({
            Address: Address,
        });
    };
    handleChange3 = (e) => {
        const Phnno = e.target.value;
        this.setState({
            Phnno: Phnno,
        });
    };
    handleSubmit = (e) => {
        if (
            this.state.Name === "" &&
            this.state.Address === "" &&
            this.state.Phnno === ""
        ) {
        } else {
            this.setState({ showInfo: true });
        }
    };

    render() {
        return (
            <div className="card bg-dark  text-white mt-1">
                <h3 className="text-center">Signup Form</h3>
                <div className="form-group ">
                    <label className="h5 p-1"> Name : </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        onChange={this.handleChange1}
                        aria-describedby="helpId"
                    />
                </div>
                <div class="form-group">
                    <label className="h5 p-1">Address : </label>
                    <textarea
                        class="form-control"
                        rows="3"
                        onChange={this.handleChange2}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="h5 p-1"> Phone Number : </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={this.handleChange3}
                        aria-describedby="helpId"
                    />
                </div>
                <button
                    className="mt-3 mb-3 btn btn-outline-success "
                    onClick={this.handleSubmit}
                >
                    SignUp
                </button>
                {this.state.showInfo && (
                    <div>
                        <p className="h3 text-success m-2">
                            Name : {this.state.Name}
                        </p>
                        <p className="h3 text-success m-2">
                            Address : {this.state.Address}
                        </p>
                        <p className="h3 text-success m-2">
                            Phone Number : {this.state.Phnno}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}
