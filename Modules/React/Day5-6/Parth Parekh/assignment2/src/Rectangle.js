import React, { Component } from "react";

export default class Rectangle extends Component {
    constructor(props) {
        super(props);
        this.state = { length: 0, height: 0, message: "" };
    }
    handleChange1 = (e) => {
        const length = e.target.value;
        this.setState({
            length: length,
        });
    };
    handleChange2 = (e) => {
        const height = e.target.value;
        this.setState({
            height: height,
        });
    };
    handleSubmit = (e) => {
        const area = this.state.length * this.state.height;
        this.setState({ message: area });
        e.preventDefault();
    };
    render() {
        return (
            <div className="bg-dark p-3 mb-1">
                <h3 className="text-white p-3 m-2">
                    Component which computes area of Rectangle .
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group bg-dark text-white m-2 p-3">
                        <label className="h5 ">Enter Length :</label>
                        <input
                            type="number"
                            className="form-control ml-2"
                            onChange={this.handleChange1}
                            placeholder="Length"
                            required
                        />

                        <label className="h5 ">Enter Height : </label>
                        <input
                            type="number"
                            className="form-control ml-2"
                            placeholder="Height"
                            onChange={this.handleChange2}
                            required
                        />

                        <button type="submit" className="btn btn-success  mt-3">
                            Area of Rectangle
                        </button>
                        <p className="text-success h5  mt-2">
                            Area of Rectangle : {this.state.message}
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}
