import React, { Component } from "react";

export default class Book extends Component {
    state = {
        count: 0,
    };
    // handleClick = () => {
    //     console.log("Button Clicked  " + this.state.count);
    // };
    addCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    lowerCount = () => {
        this.setState({ count: this.state.count - 1 });
    };
    resetCount = () => {
        this.setState({ count: 0 });
    };
    render() {
        console.log(this.props);
        const { img, author, title } = this.props.info;
        return (
            <div className="col-md-4">
                <div className="text-center  m-2">
                    <img
                        src={img}
                        alt="book"
                        className="mx-auto"
                        width="150px"
                    ></img>
                    <h4> Title : {title}</h4>
                    <h6> Author : {author}</h6>
                    <h4>Count : {this.state.count}</h4>
                    <button
                        type="button"
                        className="btn btn-primary p-2 m-1 d-inline"
                        onClick={this.addCount}
                    >
                        add count
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger p-2  m-1 d-inline"
                        onClick={this.resetCount}
                    >
                        reset count
                    </button>
                    <button
                        type="button"
                        className="btn btn-success p-2 m-1 d-inline"
                        onClick={this.lowerCount}
                    >
                        lower count
                    </button>
                </div>
            </div>
        );
    }
}
