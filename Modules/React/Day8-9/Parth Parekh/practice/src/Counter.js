import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0,
    };
    handleIncrease = () => {
        console.log("First time ", this.state.count);
        this.setState({ count: this.state.count + 1 }, () =>
            console.log("second", this.state.count)
        );
        console.log("Third time ", this.state.count);
    };

    handleDecrease = () => {
        console.log("First time ", this.state.count);
        this.setState(
            (state, props) => {
                return { count: this.state.count - 1 };
            },
            () => {
                console.log("second time : ", this.state.count);
            }
        );
        console.log("Third time ", this.state.count);
    };

    render() {
        return (
            <>
                <div className="p-3 m-3 text-center bg-dark text-monospace text-white border border-primary">
                    <h3 className="display-4 text-center">React Fragment</h3>
                    <button
                        type="button"
                        className="btn  btn-danger p-2 m-2"
                        onClick={this.handleDecrease}
                    >
                        Decrease
                    </button>

                    <span className="p-2 m-2">Count : {this.state.count}</span>
                    <button
                        type="button"
                        className=" btn btn-success p-2 m-2"
                        onClick={this.handleIncrease}
                    >
                        Increase
                    </button>
                </div>
            </>
        );
    }
}
